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

export async function getEventById(token:string, {event_id} ) {
    const supabase = await supabaseClient(token);
    
    const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', event_id)
        .single();

    if (error) {
        console.error(error);
        return []; 
    }
    return data;
}