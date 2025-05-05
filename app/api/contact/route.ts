import ContactEmailTemplate from '@/components/templates/ContactEmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { fullname: name, email, message, phone } = await request.json();

        console.log(name, email, message);

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Message <onboarding@resend.dev>',
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            to: process.env.RESEND_EMAIL!,
            subject: `${name} has sent a message from portfolio`,
            react: ContactEmailTemplate({ name, email, message, phone }),
        });

        console.log("data", data);
        console.log("error", error);

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}