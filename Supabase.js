import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cqjwbomsvthfmlbxdfwh.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxandib21zdnRoZm1sYnhkZndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNzk4OTgsImV4cCI6MjAyMzY1NTg5OH0.beR2H7hLUZzEchCH9uK5dTk6_f6TFHRIXJYO-4cvcvc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase