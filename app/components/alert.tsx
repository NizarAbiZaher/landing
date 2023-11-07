import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Check } from "lucide-react"


export function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent text-primary shadow rounded-xl mt-8 mb-8">The SD-CODE METHOD</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">What is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">SD-CODE</span> METHOD?
          
          </DialogTitle>
          <DialogDescription className="text-center">
          </DialogDescription>
        </DialogHeader>
        <DialogDescription className="text-center space-y-1">
                        <Check className="inline-block w-5 h-5" />
                        <span className="pl-2"><span className="text-blue-500 font-medium">Project</span> based learning</span>
        </DialogDescription>
        <DialogDescription className="text-center space-y-1">
                        <Check className="inline-block w-5 h-5" />
                        <span className="pl-2">Modern day programming<span className="text-blue-500 font-medium"> languages</span></span>
        </DialogDescription>
        <DialogDescription className="text-center space-y-2">
                        <Check className="inline-block w-5 h-5" />
                        <span className="pl-2">Tried & tested<span className=" text-blue-500 font-medium"> study</span> routines</span>
        </DialogDescription>
        <DialogDescription className="text-center space-y-2">
                        <Check className="inline-block w-5 h-5" />
                        <span className="pl-2"><span className="text-blue-500 font-medium">Structured</span> & up-to-date curriculum</span>
        </DialogDescription>
        <DialogDescription className="text-center space-y-2">
                        <Check className="inline-block w-5 h-5" />
                        <span className="pl-2"><span className="text-blue-500 font-medium">Community</span> & mentorship</span>
        </DialogDescription>
        <DialogDescription className="text-center space-y-2">
                        <Check className="inline-block w-5 h-5" />
                        <span className="pl-2">Career prep & <span className="text-blue-500 font-medium">networking</span></span>
        </DialogDescription>
        
        </DialogContent>
        
        
    </Dialog>
  )
}
