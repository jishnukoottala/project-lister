import { useAuth } from "../../context/AuthContext";
import CreateProject from "../Project/CreateProject";
import ProjectListing from "../Project/ProjectListing";

export default function UserDashBoard() {
  const { currentUser } = useAuth();
  return (
    <div>
      <CreateProject />
      <ProjectListing />
    </div>
  );
}
