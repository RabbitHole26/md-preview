import { createClient } from '@supabase/supabase-js'

const supabaseURL = import.meta.env.VITE_SUPABASE_URL

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// * Create a single Supabase client for interacting with your database
const supabaseClient = createClient(supabaseURL, supabaseKey)

export default supabaseClient