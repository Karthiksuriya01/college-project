
import { getEvent } from "@/api/apiEvents";
import { useSession } from "@clerk/clerk-react";
import { useEffect } from "react";

const EventListing = () => {

    const {session} = useSession()

    const fetchEvents  = async () =>
    {
        const supabaseAccessToken = await session?.getToken(
            {
                template:'supabse'
            }
        )
        let data = await getEvent(supabaseAccessToken)
        console.log(data)

    }

    useEffect(()=>
    {
        fetchEvents()
    })


  return (
    <div>
        
    </div>
  );
}

export default EventListing;
