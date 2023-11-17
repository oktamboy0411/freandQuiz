import { Outlet } from "react-router-dom"
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";

function Dashboard() {
  const user = useSelector((state: RootState) => state.user.userData)
  console.log(user);
  
  return (
    <div>
      {user.userId ? <Outlet /> : ""}
    </div>
  )
}

export default Dashboard