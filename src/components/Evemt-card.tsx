/* eslint-disable react/prop-types */
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const EventCard = ({
  event
}) => {

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex">
        <CardTitle className="flex justify-between font-bold">
          {/* {event.title} */}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <hr />
        {event.description.substring(0, event.description.indexOf("."))}.
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link to={`/event/${event.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            More Details
          </Button>
        </Link>
        <Button variant="secondary">

          <Heart fill="red"  size={40}/>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
