import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function ModalAlert({
  open,
  handleOpen,
  title
}: {
  open: boolean;
  handleOpen: () => void;
  title: JSX.Element
}) {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Alert</DialogHeader>
      <DialogBody>
        {title}
      </DialogBody>
      <DialogFooter>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
