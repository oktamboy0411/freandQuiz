import {
  Avatar,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

function UserItem() {
  return (
    <ListItem>
      <ListItemPrefix>
        <Avatar
          variant="circular"
          alt="candice"
          src="https://docs.material-tailwind.com/img/face-1.jpg"
        />
      </ListItemPrefix>
      <div>
        <Typography variant="h6" color="blue-gray">
          Tania Andrew
        </Typography>
      </div>
    </ListItem>
  );
}

export default UserItem;
