
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { LinkIcon, Timer} from "lucide-react";
import { Progress } from "./ui/progress";
import Count from "./count";


const EventCard = ({
  event
}) => {
  const timestamp = event?.created_at
  const date = new Date(timestamp)


  return (
    <Card className="flex flex-col bg-black max-w-lg h-max">
      <CardHeader className="flex flex-row justify-between py-3">
        <CardTitle className="flex justify-between font-bold capitalize text-pretty">
          {event.title}
        </CardTitle>
        <CardTitle className={event.status == "pending" ? "text-xs bg-red-800 w-fit px-1.5 py-0.5 rounded-xl capitalize" : "text-xs bg-green-800 w-fit px-1.5 py-0.5 rounded-xl capitalize"}>
            {event.status}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 py-2">
        <hr className="mb-1" />
        <p className="text-sm">
          {event.description.includes(".") 
            ? event.description.substring(0, event.description.indexOf(".")) 
            : event.description}
        </p>
        <p>{event.created_by}</p>
      </CardContent>
      <CardContent className="flex flex-col gap-1.5 py-2">
        <div className="flex flex-row items-center gap-1.5 text-sm">
          <LinkIcon size={14} /> {event.link}
        </div>
        <div className="flex flex-row items-center gap-1.5 text-sm">
          <Timer size={14}/> {date.toDateString()}
        </div>
        <Count eventid={event.id}/>
        
      </CardContent>
      <CardFooter className="flex gap-2 py-3">
      
        <AddToCalendarButton
          name={event.title}
          options={['Google']}
          location="World Wide Web"
          startDate={date.toISOString()}
          endDate={event.end_date}
          startTime="10:15"
          endTime="23:30"
          timeZone="America/Los_Angeles"
          
        />
        <Link to={`/event/${event.id}`}>
          <Button variant="secondary" className="h-8 p-6 text-sm">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
