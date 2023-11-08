import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function LoginForm() {
    return (
        <div className="grid place-items-center h-screen">
            <div className="p-5 rounded-lg border-t-4 animated-border-and-shadow">
                <h1 className="text-xl font-bold py-4">Enter Details</h1>
                <form className="flex flex-col gap-3">
                    <Input type='text' placeholder="Email"/>
                    <Input type='password' placeholder="Password"/>
                    <Button>Login</Button>

                    <div className="text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">Error</div>

                    <Link className="text-sm mt-3 text-right" href={'/register'}>Dont have an an account? <span className="underline">SignUp</span></Link>
                </form>
            </div>
        </div>
    )
}