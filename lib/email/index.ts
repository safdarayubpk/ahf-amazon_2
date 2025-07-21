import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string, name: string) {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Welcome to Our Store!',
      html: `
        <h1>Welcome to Our Store, ${name}!</h1>
        <p>Thank you for creating an account. We're excited to have you here!</p>
        <p>Start shopping now and discover our amazing products.</p>
      `,
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}

export async function sendOrderConfirmation(email: string, orderNumber: string) {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `Order Confirmation #${orderNumber}`,
      html: `
        <h1>Order Confirmation</h1>
        <p>Thank you for your order #${orderNumber}!</p>
        <p>We'll send you another email when your order ships.</p>
      `,
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
