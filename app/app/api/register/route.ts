import { NextResponse } from "next/server";

export async function POST(req:any) {
    try {
        const{ name, email, password } = await req.json();

        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Password: ", password);

        return NextResponse.json({ message: "User registered!"}, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500});
    }
}