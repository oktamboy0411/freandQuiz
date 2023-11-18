import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

export default function ModalPrompt({
  open,
  handleOpen,
  setData,
  title,
}: {
  open: boolean;
  handleOpen: () => void;
  title: JSX.Element;
  setData: (text: string) => void;
}) {
  const [text, setText] = useState<string>("");

  const setTextChange = () => {
    setData(text);
    setText("")
    handleOpen();
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>{title}</DialogHeader>
      <DialogBody>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
        />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={setTextChange}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
