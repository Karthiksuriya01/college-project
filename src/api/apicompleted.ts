import supabaseClient from "@/utils/supabase";


export async function completedStatus(token:string, {user_id,event_id} ) {
  const supabase = await supabaseClient(token);
  
  const { data, error } = await supabase
      .from('applications')
      .insert([
        {
          user_id,
          event_id,
        },
      ]).select()

  if (error) {
      console.error(error);
      return []; 
  }
  return data;
}
