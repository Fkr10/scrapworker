import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT, // Use 587 if you prefer TLS
      secure: true, // True for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIEVE,
      subject: subject,
      text: message,
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #4CAF50; border-radius: 8px;">
    <h2 style="background-color: #4CAF50; color: white; padding: 15px; text-align: center; border-radius: 5px;">
      📩 New Contact Form Submission
    </h2>
    
    <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
    <p style="font-size: 16px; color: #333;"><strong>Email:</strong> 
      <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a>
    </p>
    <p style="font-size: 16px; color: #333;"><strong>Subject:</strong> ${subject}</p>
    
    <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
    <div style="background-color: #e8f5e9; padding: 15px; border-left: 4px solid #4CAF50; font-size: 15px; color: #333;">
      ${message}
    </div>

    <hr style="border: none; height: 2px; background-color: #4CAF50; margin: 20px 0;">

    <p style="text-align: center; font-size: 14px; color: #555;">
      📍 <strong>Scrapworker</strong> | Reliable Scrap Collection & Recycling Services
    </p>
    <p style="text-align: center; font-size: 14px; color: #555;">
      🌍 <a href="https://scrapworker.com" style="color: #4CAF50; text-decoration: none;">www.scrapworker.com</a> | 📧 team@scrapworker.com | 📞 +91 94 5751 1854
    </p>
  </div>
`,
    };

    let info = await transporter.sendMail(mailOptions);
    return Response.json({ success: true, message: "Email sent!", info });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Error sending email",
      error,
    });
  }
}
