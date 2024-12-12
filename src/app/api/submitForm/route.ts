import { connectDB } from "@/db/connectDB";
import FormResponse from "@/models/formResponse.model";
import { NextResponse } from "next/server";

async function sendMails(name: string, email: string, message: string) {
    await fetch(`${process.env.URL}/api/email/send`, {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
            "Content-Type": "application/json",
        },
    })
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const { name, email, message } = await req.json();
        const formResponse = new FormResponse({ name, email, message });
        const [res1, res2] = await Promise.all([
            await formResponse.save(),
            await sendMails(name, email, message)
        ])
        return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ message: "Error submitting form" }, { status: 500 })
    }
}