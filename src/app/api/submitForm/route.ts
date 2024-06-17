import { connectDB } from "@/db/connectDB";
import FormResponse from "@/models/formResponse.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        await connectDB();
        const { name, email, message } = await req.json();
        const formResponse = new FormResponse({ name, email, message });
        await formResponse.save();
        return NextResponse.json({message: "Form submitted successfully"}, {status: 200})
    }
    catch(err){
        console.log(err);
        return NextResponse.json({message: "Error submitting form"}, {status: 500})
    }
}