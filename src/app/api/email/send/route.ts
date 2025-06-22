import { NotificationEmail } from '@/components/email/me-email-template';
import { SenderEmailTemplate } from '@/components/email/sender-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = schema.parse(body);
    
    const [senderResponse, notificationResponse] = await Promise.all([
      resend.emails.send({
        from: 'Arjun <arjun@arjunbector.in>',
        to: [validatedData.email],
        subject: 'Thank You for Reaching Out!',
        react: SenderEmailTemplate({ name: validatedData.name }),
      }),
      resend.emails.send({
        from: 'Arjun <arjun@arjunbector.in>',
        to: ["arjunbector@gmail.com"],
        subject: 'New Form Submission',
        react: NotificationEmail(validatedData)
      })
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
