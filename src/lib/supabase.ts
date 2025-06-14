import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://syvkefpljdcoricvmqcy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5dmtlZnBsamRjb3JpY3ZtcWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MTY5NTYsImV4cCI6MjA2NTQ5Mjk1Nn0.1LulUdvJfybA-rHcag_cCpeO2j2Qt0pQ8XSKWt8huBA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Prompt {
  id: number
  content: string
  assigned_to: string
  status: boolean
  created_at: string
} 