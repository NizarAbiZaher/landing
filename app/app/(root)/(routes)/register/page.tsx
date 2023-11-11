import RegisterForm from "@/components/register-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const RegisterPage = async () => {
    const session = await getServerSession(authOptions)

    if (session) {
        return redirect("/");
    }
    return (
        <div>
            <RegisterForm />
        </div>
    )
}

export default RegisterPage