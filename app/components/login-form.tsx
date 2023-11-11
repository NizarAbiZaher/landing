"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    try {
        const res = await signIn('credentials'), {
            email, password, redirect: false,
        }
        if (res.error) {
            setError("Invalid Credentials")
            return;
        }

        router.replace("dashboard");
    } catch (error) {
        console.log(error)
    }


    return (
        <div className="grid place-items-center h-screen">
            <div className="p-5 rounded-lg border-t-4 animated-border-and-shadow">
                <h1 className="text-xl font-bold py-4">Enter Details</h1>
                <form className="flex flex-col gap-3">
                    <Input onChange={e => setEmail(e.target.value)}type='text' placeholder="Email"/>
                    <Input onChange={(e) => setPassword(e.target.value)}type='password' placeholder="Password"/>
                    <Button>Login</Button>

                    {error && (
                        <div className="text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                    )}

                    
                    <Link className="text-sm mt-3 text-right" href={'/register'}>Dont have an an account? <span className="underline">SignUp</span></Link>
                </form>
            </div>
        </div>
    )
}