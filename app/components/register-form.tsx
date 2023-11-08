"use client"
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

export default function RegisterForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")

    // handle submit
    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if(!name || !email || !password) {
            setError("Please fill all fields")
            return;
        }

        try {
        // fetch call to api route
            const res = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            if (res.ok) {
                const form = e.target;
                form.reset();

            } else {
                console.log("Register Failed")
            }

            } catch (error) {
                console.log("Error during registration",error)
            }
        };

   

    return (
        <div className="grid place-items-center h-screen">
        <div className="p-5 rounded-lg border-t-4 animated-border-and-shadow">
            <h1 className="text-xl font-bold py-4">Enter Details</h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <Input type='text' placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <Input type='text' placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <Input type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <Button>Sign Up</Button>

                { error && (

                    <div className="text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">
                        {error}
                    </div>
                )}

                

                <Link className="text-sm mt-3 text-right" href={'/login'}>Dont have an an account? <span className="underline">Login</span></Link>
            </form>
        </div>
    </div>
    )
}