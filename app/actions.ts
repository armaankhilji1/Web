const BREVO_API_KEY = process.env.const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY;
;

if (!BREVO_API_KEY) {
  throw new Error("Missing BREVO_API_KEY environment variable");
}

export async function sendEmail(formData: FormData) {
  console.log("Starting sendEmail function");

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  console.log("BREVO_API_KEY (Masked):", BREVO_API_KEY ? BREVO_API_KEY.slice(0, 10) + "..." : "Missing");

  const data = {
    sender: { name: "MK Tech & Consulting", email: "mktechconsulting1@gmail.com" },
    to: [{ email: "mktechconsulting1@gmail.com" }],
    subject: `New inquiry: ${service}`,
    htmlContent: `
      <h1>New Inquiry from MK Tech & Consulting Website</h1>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    replyTo: { email: email, name: `${firstName} ${lastName}` },
  };

  try {
    console.log("Attempting to send email via Brevo API");
    const response = await fetch("https://api.sendinblue.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": `${BREVO_API_KEY}`
      },
      body: JSON.stringify(data),
    });

    console.log("Received response from Brevo API");
    const responseData = await response.json();
    console.log("Response data:", responseData);

    if (!response.ok) {
      console.error("Error response from Brevo API:", responseData);
      return { success: false, error: JSON.stringify(responseData) || "Failed to send email" };
    }

    console.log("Email sent successfully");
    return { success: true };
  } catch (error) {
    console.error("Error in sendEmail function:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : JSON.stringify(error) || "An unknown error occurred",
    };
  }
}
