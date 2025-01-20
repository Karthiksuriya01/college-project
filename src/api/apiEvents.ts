import supabaseClient from "@/utils/supabase"

export const getEvent = async (token) =>
    {
        const supabase = await supabaseClient(token)
        
                
        const { data , error } = await supabase
        .from('event')
        .select('*')
        

        if(error)
        {
            console.error(error)
        }
        return data
    } 