import supabaseClient from "@/utils/supabase";

export async function getEvent(token: string) {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase
        .from('events')
        .select('*');

    if (error) {
        console.error('Error fetching events:', error);
        return [];
    }
    return data;
}

export async function addEvent(token: string, _:any, eventdata: any) {
    const supabase = await supabaseClient(token);
    
    try {
        const { data, error } = await supabase
            .from('events')
            .insert([{
                ...eventdata,
            }])
            .select();

        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Error adding event:', error);
        return [];
    }
}

export async function getEventById(token: string, { event_id }: { event_id: string }) {
    const supabase = await supabaseClient(token);

    const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', event_id)
        .single();

    if (error) {
        console.error('Error fetching event by ID:', error);
        return [];
    }
    return data;
}