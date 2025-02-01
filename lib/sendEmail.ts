import emailjs from "@emailjs/browser"

export const sendEmail = async (form: HTMLFormElement) => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("Email service ID, template ID, or public key is missing")
    }

    console.log(form);

    await emailjs.sendForm(serviceId, templateId, form, publicKey)

    return { success: true }
  } catch (error) {
    console.error("Email sending error:", error)
    return { success: false, error }
  }
};