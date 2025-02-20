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

interface EventData {
  title: string;
  description: string;
  end_date: string; // Format: YYYY-MM-DD
  link: string;
  status: 'pending' | 'completed';
  created_by: string;
}

export async function addEvent(token: string, _:string, eventdata: EventData) {
  const supabase = await supabaseClient(token);
  console.log(eventdata)
  
  try {
    const { data, error } = await supabase
      .from('events')
      .insert([eventdata])
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error adding event:', error);
    throw error; 
  }
}

export async function deleteEvent(token: string, {event_id}) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from('events')
    .delete()
    .eq('id', event_id)
    .select()

  if (error) {
    console.log(error);
    return [];
  }
  return data;
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