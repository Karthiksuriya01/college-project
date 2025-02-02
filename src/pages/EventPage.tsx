import { completedStatus } from "@/api/apicompleted";
import { getEventById } from "@/api/apiEvents";
import { Button } from "@/components/ui/button";

import useFetch from "@/hook/useFetch";
import { useAuth, useUser } from "@clerk/clerk-react";
import { CircleCheckBig, Link2, Notebook, Timer } from "lucide-react";
import { useEffect } from "react";

import {  useParams } from "react-router-dom";



const EventPage = (

) => {

  const {isLoaded,user} = useUser()
  const {userId} = useAuth()
  const { id } = useParams<{ id: string }>();
  //event show based on id
  const { data:event, loading, error, fn:event_funct } = useFetch(getEventById, {
    event_id: id
  })
  //completed button
  const { data:completed, loading:compl_loading, error:compl_error, fn:compl_func } = useFetch(completedStatus, {
    user_id: userId,
    event_id: id
  })
  console.log(userId)
  useEffect(() => {
  
    if(isLoaded) 
      {
        event_funct();
      }
  [isLoaded]})
  useEffect(() => {
  
    if(isLoaded) 
      {
        compl_func();
      }
  [isLoaded]})
  
  if(!isLoaded) return <h1>Loading...</h1>
  if (error) {
    console.error(error);
  }

  const timestamp = event?.created_at

  const date = new Date(timestamp)

      


  return (
    <div>
      <div>

      <h1>{event?.title}</h1>
      <div className="flex flex-row gap-8 my-5">
          <p className="flex flex-row items-center gap-2"><Timer size={20}/>  Date : </p>
          <p>{date.toDateString()}</p>
      </div>
      <div className="flex flex-row gap-8 my-5">
          <p className="flex flex-row items-center gap-2"> <CircleCheckBig size={20}/> Status : </p>
          <p className={event?.status == "pending" ? "text-xs bg-red-400 w-fit px-2 py-1 rounded-xl capitalize" : "text-xs bg-green-500 w-fit px-2 py-1 rounded-xl capitalize"}>
            {event?.status}
        </p>
      </div>
      <div className="flex flex-row gap-8 my-5">
          <p className="flex flex-row items-center gap-2"><Link2 size={20}/>Link : </p>
          <p className="text-blue-700"><a href={event?.link}>{event?.link}</a></p>
      </div>
      <div className="flex flex-row gap-8 my-5">
          <p className="flex flex-row items-center gap-2">Completed : </p>
          <p>20/62</p>
      </div>
     
      </div>
      <hr />
      <div className="my-5 space-y-8">
        <p>{event?.description}</p>
        <Button variant="secondary" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 flex-1 bg-[#00FF38] text-black hover:bg-[#00FF38]/90">
           Completed
          </Button>
      </div>
     
     
    </div>
  );
}

export default EventPage;
