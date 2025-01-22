import supabaseClient from "@/utils/supabase";


export async function getCompletedStatus(token:string,userId:string) {
    const supabase = await supabaseClient(token);
    
    const { data, error } = await supabase
      .from('completed') // Replace 'your_table_name' with your actual table name
      .select('*', { count: 'exact', head: true }) // Get the count without returning all rows
      .eq('user_id', userId); // Filter by the user ID

    if (error) {
        console.error(error);
        return []; 
    }
    // console.log(`${data}`)
    return data;
}

