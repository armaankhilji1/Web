"use server"

const BREVO_API_KEY = "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"

export async function sendEmail(formData: FormData) {
  console.log('Starting sendEmail function')
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const email = formData.get('email') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

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
    replyTo: { email: email, name: `${firstName} ${lastName}` }
  }

  try {
    console.log('Attempting to send email via Brevo API')
    const response = await fetch('https://api.sendinblue.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify(data)
    })

    console.log('Received response from Brevo API')
    const responseData = await response.json()
    console.log('Response data:', responseData)

    if (!response.ok) {
      console.error('Error response from Brevo API:', responseData)
      return { success: false, error: JSON.stringify(responseData) || 'Failed to send email' }
    }

    console.log('Email sent successfully')
    return { success: true }
  } catch (error) {
    console.error('Error in sendEmail function:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : JSON.stringify(error) || 'An unknown error occurred'
    }
  }
}

