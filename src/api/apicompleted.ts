import supabaseClient from "@/utils/supabase";


export async function markEventAsCompleted(token:string, {user_id,event_id} ) {
  const supabase = await supabaseClient(token);
  
  const { data, error } = await supabase
      .from('completed')
      .insert([
        {
          user_id,
          event_id,
        },
      ]).select()

  if (error) {
      console.log(error);
      return []; 
  }
  return data;
}


export async function CheckCompletionStatus(
  token: string,
  { user_id, event_id }
) {

  const supabase = await supabaseClient(token);
  
  const { data, error } = await supabase
    .from('completed')
    .select('*')
    .eq('user_id', user_id)
    .eq('event_id', event_id)

  if (error) {
    console.log(error);
    return [];
  }
  console.log(data)
  return data;

}