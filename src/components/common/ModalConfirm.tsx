import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  
  export default function ModalConfirm({
    open,
    handleOpen,
    title,
    callBack
  }: {
    open: boolean;
    handleOpen: () => void;
    title: JSX.Element,
    callBack: () => void
  }) {

    const changeBoolean = () => {
        callBack()
        handleOpen()
    }

    return (
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Alert</DialogHeader>
        <DialogBody>
          {title}
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
          <Button variant="gradient" color="green" onClick={changeBoolean}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    );
  }
  