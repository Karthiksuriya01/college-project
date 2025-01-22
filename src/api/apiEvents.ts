import supabaseClient from "@/utils/supabase";


export async function getEvent(token:string) {
    const supabase = await supabaseClient(token);
    
    const { data, error } = await supabase
        .from('events')
        .select('*');

    if (error) {
        console.error(error);
        return []; 
    }
    return data;
}
