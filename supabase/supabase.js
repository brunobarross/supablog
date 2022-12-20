import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://oygnaguufycdsacebddg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95Z25hZ3V1ZnljZHNhY2ViZGRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0OTIxNzAsImV4cCI6MTk4NzA2ODE3MH0._9CIsSdrtryGF_p9oiQoY-ZTt2Qe3gBipXp7zroI2AY'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
