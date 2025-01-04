import { useState } from "react"

import {
  Dialog,
  DialogContent,
 DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"



export default function DialogCloseButton() {
      const[value, setValue] = useState('')
  return (
    <Dialog>
      <DialogTrigger asChild>
      <input
    
    className="border border-gray-300 mt-10 p-6  bg-white h-10 px-5 pr-16 rounded-3xl md:w-96 w-64 text-sm focus:outline-none"
    type="text" placeholder="Search sermons, church doctrines, and more" />
    
    
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
       
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2 mt-6">
           
            <Input
              value={value}
           placeholder="Search sermons, church doctrines, and more"
             onChange={(e) => setValue(e.target.value)}
            />
          </div>
          
        </div>
        
      </DialogContent>
    </Dialog>
  )
}
