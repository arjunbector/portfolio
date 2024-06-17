import { connectDB } from "@/db/connectDB";
import FormResponse from "@/models/formResponse.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        connectDB();
        const responses = await FormResponse.find().sort({ createdAt: -1 }).select("-updatedAt -__v");
        if (!responses) {
            throw new Error("No responses found");
        }
        console.log(responses);
        return NextResponse.json({ responses }, { status: 200 });
    }
    catch (err: any) {
        console.log(err);
        return NextResponse.json({ message: err.message || "Internal server error" }, { status: 500 })
    }
}
export function POST() {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}