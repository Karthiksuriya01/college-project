
import { getEvent } from "@/api/apiEvents";
import { useEffect } from "react";
import StatusCards from "@/components/status-cards";
import { useUser } from "@clerk/clerk-react";
import EventCard from "@/components/Evemt-card";
import useFetch from "@/hook/useFetch";


const Homepage = () => {
  const {user,isLoaded} = useUser()

  const {data:event_data,loading:event_loading,error,fn:eventFn,} = useFetch(getEvent)

  useEffect(() => {
    eventFn();
  }, [isLoaded]);

  if (!isLoaded) {
    return <h1>Loading....</h1>;
  }
  if(error)
  {
    console.log(error)
  }
  return (
    <div>
      <div>
        <span className="capitalize text-3xl font-bold">👋Welcome Back, {
        `${user?.firstName}`
        }</span>
      </div>
      <StatusCards/>
      <h4>Today</h4>

      
      

      {event_loading == false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {event_data?.length? (
            event_data.map((event:any) => 
            {
              return <EventCard key={event.id} event = {event}/>
            })
          ):
          (
            <div>No jobs Found</div>
          )
          }
        </div>
      )}
    </div>
        
  )

 


}
export default Homepage;
