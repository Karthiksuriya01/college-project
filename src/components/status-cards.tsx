
import { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import useFetch from "@/hook/useFetch";
import { getUserCompletedEventCount } from "@/api/apicompleted";
import { useAuth, useUser } from "@clerk/clerk-react";



const StatusCards = () => {

    const {userId} = useAuth()
    const {isLoaded} = useUser()

    const [completedCount, setcompletedCount] = useState(0);
    const { data:count, loading, error, fn:count_funct } = useFetch(getUserCompletedEventCount, {
        user_id: userId
      })

    useEffect(() => 
    {
        if(isLoaded) count_funct()
    },[isLoaded])

    useEffect(() => 
    {
        if(count) setcompletedCount(count?.length)
    },[count])

    if (loading) {
        return <div>Loading...</div>;
      }

  return (

   

    
    <div className="flex items-center gap-7 m-4 bg-whit">
        <Card className="bg-black">
            <CardHeader className="flex items-center">
                <CardTitle className="font-semibold">{completedCount}</CardTitle>
                <CardDescription>Completed</CardDescription>
            </CardHeader>
            
        </Card>
        <Card className="bg-black">
            <CardHeader className="flex items-center">
                <CardTitle className="font-semibold">6</CardTitle>
                <CardDescription>Completed</CardDescription>
            </CardHeader>
            
        </Card>
        <Card className="bg-black">
            <CardHeader className="flex items-center">
                <CardTitle className="font-semibold">6</CardTitle>
                <CardDescription>Completed</CardDescription>
            </CardHeader>
            
        </Card>
    </div>
  );
}

export default StatusCards;
