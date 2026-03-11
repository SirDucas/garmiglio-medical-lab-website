import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        
        // Extract basic fields
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const subject = formData.get("subject") as string;
        const message = formData.get("message") as string;

        if (!name || (!email && !message)) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }

        // --- NODEMAILER SETUP ---
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // e.g. "noreply.garmigliolab@gmail.com"
                pass: process.env.EMAIL_PASS, // The 16-character App Password
            },
        });

        // --- ATTACHMENTS HANDLING ---
        // Nodemailer accepts an array of attachment objects.
        const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
        
        // Helper function to extract files and build the Nodemailer attachment object
        const processFile = async (fileEntry: FormDataEntryValue | null) => {
            if (fileEntry && fileEntry instanceof File && fileEntry.size > 0) {
                const arrayBuffer = await fileEntry.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                attachments.push({
                    filename: fileEntry.name,
                    content: buffer,
                    contentType: fileEntry.type
                });
            }
        };

        // Process explicit named fields
        await processFile(formData.get("cv"));
        await processFile(formData.get("coverLetter"));

        // Process potentially multiple files under "otherFiles"
        const otherFiles = formData.getAll("otherFiles");
        for (const file of otherFiles) {
            await processFile(file);
        }

        // --- EMAIL CONTENT CONSTRUCTION ---
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`, // Send *from* our auth email to avoid spam blocks
            replyTo: email, // Set the reply-to to the user's email
            to: "smigliozzi@tgen.org, lgarofano@tgen.org, paul.migliozzi@gmail.com", // The actual recipients Including the test email
            subject: `Website Form: ${subject}`,
            text: `
You have a new submission from the GarMiglioLab Website.

Contact Details:
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
            `,
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                <h2 style="color: #0f766e;">New Website Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;"/>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
                <p style="color: #666; font-size: 12px; margin-top: 40px;">This email was sent from the Get in Touch form on the GarMiglioLab website.</p>
            </div>
            `,
            attachments: attachments
        };

        // --- SEND THE EMAIL ---
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully." });

    } catch (error) {
        console.error("Nodemailer Error:", error);
        return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
}
