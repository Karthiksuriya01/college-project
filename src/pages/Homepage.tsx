import StatusCards from "@/components/status-cards";
import { useUser } from "@clerk/clerk-react";

const Homepage = () => {
  const {user} = useUser()

  return (
    <div>
      <div>
        <span className="capitalize text-3xl font-bold">👋Welcome Back, {
        `${user?.firstName}`
        }</span>
      </div>
      <div>
        <StatusCards/>
      </div>
    </div>
  );
}

export default Homepage;
