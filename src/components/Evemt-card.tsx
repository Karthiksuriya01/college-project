/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { LinkIcon } from "lucide-react";


const EventCard = ({
  event
}) => {

  // const {user} = useUser()

  return (
    <Card className="flex flex-col bg-black">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex justify-between font-bold capitalize">
          {event.title}
        </CardTitle>
        <CardTitle className={event.status == "pending" ? "text-xs bg-red-400 w-fit px-2 py-1 rounded-xl capitalize" : "text-xs bg-green-400 w-fit px-2 py-1 rounded-xl capitalize"}>
            {event.status}
        </CardTitle>

      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <hr />
        {event.description.includes(".") 
          ? event.description.substring(0, event.description.indexOf(".")) 
          : event.description} 
        
      </CardContent>
      <CardContent className="flex items-center flex-row gap-2 flex-1">
       <LinkIcon size={15} /> {event.link}
        
      </CardContent>
      <CardFooter className="flex gap-2">
          <Button variant="secondary" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 flex-1 bg-[#00FF38] text-black hover:bg-[#00FF38]/90">
           Completed
          </Button>
          <Link to={`/event/${event.id}`}>
        <Button variant="secondary"  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1">
          View Details
        </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
