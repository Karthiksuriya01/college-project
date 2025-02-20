import { getEventCompletionCount } from '@/api/apicompleted';
import useFetch from '@/hook/useFetch';
import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { Progress } from './ui/progress';


const Count = ({eventid}) => {
    const [completedCount,setCompletedCount] = useState(0)
    const {isLoaded} = useUser()

   //completed count
   const { data:compl_count,fn:compl_count_func,loading } = useFetch(getEventCompletionCount, {
    event_id: eventid
  })
   useEffect(() => {
      if (compl_count) {
        setCompletedCount(compl_count?.length);
      }
     },[compl_count])

     useEffect(() => 
        {
          if(isLoaded) compl_count_func();
        },[isLoaded])

    if(loading) return <p>Loading...</p>
  return (
    

    <div>
      <p>{completedCount}/71</p>
      <div className="flex flex-row mt-3 items-center gap-1.5 text-sm">
          <Progress value={completedCount} max={71}/>
        </div>
    </div>
  );
}

export default Count;
