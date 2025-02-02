import { createClient, SupabaseClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseInstance: SupabaseClient | null = null;

const supabaseClient = async (supabaseAccessToken: string): Promise<SupabaseClient> => {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase configuration');
  }

  // Return cached instance if exists with same token
  if (supabaseInstance) {
    return supabaseInstance;
  }

  // Create new instance
  supabaseInstance = createClient(supabaseUrl, supabaseKey, {
    global: { 
      headers: { Authorization: `Bearer ${supabaseAccessToken}` }
    },
    auth: {
      persistSession: true,
      storageKey: 'custom-auth-key' // Unique storage key
    }
  });

  return supabaseInstance;
};

// Helper to clear instance (useful for logout)
export const clearSupabaseInstance = () => {
  supabaseInstance = null;
};

export default supabaseClient;