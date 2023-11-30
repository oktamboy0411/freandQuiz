import {
  Avatar,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { friendsAnswersType } from "../../types/friendsAnswersType";
import AvatarLogo from "../../assets/AvatarLogo";

function UserItem({ data }: { data: friendsAnswersType }) {
  return (
    <ListItem>
      <ListItemPrefix>
        {data.userLogo ? (
          <Avatar
            variant="circular"
            alt="candice"
            src="https://docs.material-tailwind.com/img/face-1.jpg"
          />
        ) : (
          <AvatarLogo />
        )}
      </ListItemPrefix>
      <div>
        <Typography variant="h6" color="blue-gray">
          {data.userName}
        </Typography>
      </div>
    </ListItem>
  );
}

export default UserItem;
