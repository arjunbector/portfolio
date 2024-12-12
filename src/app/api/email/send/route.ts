import { NotificationEmail } from '@/components/email/me-email-template';
import { SenderEmailTemplate } from '@/components/email/sender-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
    try {
        const { name, email, message } = await req.json()
        const { data, error } = await resend.batch.send([{
            from: 'Arjun <arjun@arjunbector.live>',
            to: [email],
            subject: 'Thank You for Reaching Out!',
            react: SenderEmailTemplate({ name }),
        },
        {
            from: 'Arjun <arjun@arjunbector.live>',
            to: ["arjunbector@gmail.com"],
            subject: 'New Form Submission',
            react: NotificationEmail({ name, email, message })
        }]);


        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        console.log(error);
        return Response.json({ error }, { status: 500 });
    }
}
