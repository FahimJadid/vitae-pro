import { Loader2, PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlobalApi from "../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";

const CreateResume = () => {
  const [openDialogue, setOpenDialogue] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };

    GlobalApi.CreateNewResume(data).then(
      (res) => {
        console.log(res)
        if (res) {
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <>
      <div
        onClick={() => setOpenDialogue(true)}
        className="p-6 h-[280px] bg-green-100 rounded-lg hover:shadow-lg transition-shadow duration-300 flex items-center justify-center cursor-pointer"
      >
        <PlusSquare size={48} className="text-green-500" />
      </div>

      <Dialog open={openDialogue} onOpenChange={setOpenDialogue}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new Resume</DialogTitle>
            <DialogDescription>Add Title For Your New Resume</DialogDescription>
          </DialogHeader>
          <Input
            onChange={(e) => setResumeTitle(e.target.value)}
            type="text"
            placeholder="EX. Backend Developer"
            className="w-full p-2 border rounded mt-4"
          />
          <div className="flex justify-end gap-4">
            <Button
              onClick={() => setOpenDialogue(false)}
              variant="outline"
              className="bg-red-500 text-white"
            >
              Cancel
            </Button>
            <Button
              disabled={!resumeTitle || loading}
              onClick={() => handleCreate()}
              variant="outline"
              className="bg-green-500 text-white"
            >
              {loading ? <Loader2 className="mr-2 h-4 w-8 animate-spin bg-green-500" /> : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateResume;
