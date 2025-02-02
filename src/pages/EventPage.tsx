import {  CheckCompletionStatus, markEventAsCompleted } from "@/api/apicompleted";
import { getEventById } from "@/api/apiEvents";
import { Button } from "@/components/ui/button";

import useFetch from "@/hook/useFetch";
import { toast } from "@/hooks/use-toast";
import { useAuth, useUser } from "@clerk/clerk-react";
import { CircleCheckBig, Link2, Timer } from "lucide-react";
import { useEffect, useState } from "react";

import {  useParams } from "react-router-dom";



const EventPage = (

) => {

  const [isCompleted, setIsCompleted] = useState(false);
  const {isLoaded,user} = useUser()
  const {userId} = useAuth()
  const { id } = useParams<{ id: string }>();
  //event show based on id
  const { data:event, loading, error, fn:event_funct } = useFetch(getEventById, {
    event_id: id
  })
  //completed button
  const { fn:compl_func } = useFetch(markEventAsCompleted, {
    user_id: userId,
    event_id: id
  })
  //completetion status
  const { data:stat_data,fn:stat_func } = useFetch(CheckCompletionStatus, {
    user_id: userId,
    event_id: id
  })
  useEffect(() => {
  
    if(isLoaded) stat_func();
  [isLoaded,stat_func]})
  useEffect(() => {
    if (stat_data && stat_data.length > 0) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [stat_data]);
  
  useEffect(() => {
  
    if(isLoaded) 
      {
        event_funct();
      }
  [isLoaded]})

  const handleComplete = async () => {
    try
    {
      await compl_func()
      toast({
        description: "Your message has been sent.",
      })
      setIsCompleted(true)
    }catch(e)
    {
      console.log(e)
      toast({
        description: "Your message not has been sent.",
      })
    }
    
  }
 
  
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
        {
          user?.unsafeMetadata.role != 'admin' &&  <Button variant="secondary" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 flex-1 bg-[#00FF38] text-black hover:bg-[#00FF38]/90"
          onClick={handleComplete}
          disabled={isCompleted} 
          >
             {isCompleted ? "You have completed this" : "Complete"}
            </Button>
        }
       
      </div>
     
     
    </div>
  );
}

export default EventPage;
