import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"

export default function Settings () {
    return (
        <div className="text-center">
            <h1>Settings</h1>
            <div className="shadow-lg p-8 bg-zinc-300">Name: <span className="font-bold">Nizar</span></div>
            <div className="shadow-lg p-8 bg-zinc-300">Email: <span className="font-bold">Nizar@gmail.com</span></div>
            <Button>Log Out</Button>
        </div>
    )
}