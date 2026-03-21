import nodemailer from "nodemailer";

function validate(data) {
  const errors = {};

  if (!data.name || !/^[A-Za-z\s]{2,50}$/.test(data.name)) {
    errors.name = "Invalid name";
  }

  if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Invalid email";
  }

  if (!data.phone || !/^\d{10,14}$/.test(data.phone)) {
    errors.phone = "Invalid phone";
  }

  if (!data.service) {
    errors.service = "Service required";
  }

  if (!data.message || data.message.length > 1000) {
    errors.message = "Invalid message";
  }

  return errors;
}

export async function POST(req) {
  try {
    const data = await req.json();

    // 🔹 Validation
    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      return Response.json({ status: "error", errors }, { status: 400 });
    }

    // 🔹 Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔹 Admin Mail
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "sm972312@gmail.com",
      cc: ["manager@yourcompany.com"],     // optional
      bcc: ["hidden@yourcompany.com"],     // optional
      replyTo: data.email,
      subject: "New Contact Enquiry",
      html: `
        <h3>New Inquiry</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Service:</b> ${data.service}</p>
        <p><b>Message:</b><br>${data.message}</p>
      `,
    });

    // 🔹 Auto Reply
    await transporter.sendMail({
      from: `"Sohel Malek" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "We received your message",
      html: `
        Hello ${data.name},<br><br>
        Thank you for contacting us.<br>
        We’ll get back to you within 24 hours.<br><br>
        Regards,<br>
        Team
      `,
    });

    return Response.json({ status: "success" });

  } catch (err) {
    console.error(err);
    return Response.json(
      { status: "error", message: "Server error" },
      { status: 500 }
    );
  }
}