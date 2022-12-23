import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hfqgbqfkphpqcldxmegj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmcWdicWZrcGhwcWNsZHhtZWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE1NjI3NDUsImV4cCI6MTk4NzEzODc0NX0.QtFx0-XCnapC6VFTBkv-63DkU_RnTn1zvLIwR2wQFmc'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
