import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rqegdhagixavmmdzxfpu.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZWdkaGFnaXhhdm1tZHp4ZnB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NzA2MzAsImV4cCI6MjAyMDA0NjYzMH0.BAh8GCOGwOoKW7WG1pZ4d7JRHSTBad5rYVqGPLrzkN0';
//
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
