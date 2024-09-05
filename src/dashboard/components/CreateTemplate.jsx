import { PlusSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const CreateTemplate = () => {
  const [openDialogue, setOpenDialogue] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenDialogue(true)}
        className="p-6 h-[280px] bg-blue-100 rounded-lg hover:shadow-lg transition-shadow duration-300 flex items-center justify-center cursor-pointer"
      >
        <PlusSquare size={48} className="text-blue-500" />
      </div>

      <Dialog open={openDialogue} onOpenChange={setOpenDialogue}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new Template</DialogTitle>
            <DialogDescription>
              Add Title For Your New Template
            </DialogDescription>
          </DialogHeader>
          <Input
            type="text"
            placeholder="EX. Functional Resume"
            className="w-full p-2 border rounded mt-4"
          />
          <div className="flex justify-end gap-4">
            <Button onClick={() => setOpenDialogue(false)} variant="outline" className="bg-red-500 text-white">
              Cancel
            </Button>
            <Button variant="outline" className="bg-green-500 text-white">
              Create
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateTemplate;
