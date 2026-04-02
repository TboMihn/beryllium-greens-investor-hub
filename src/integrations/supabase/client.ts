import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey =
	import.meta.env.VITE_SUPABASE_ANON_KEY ||
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	console.warn(
		"Supabase environment variables are missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY) to enable database features.",
	);
}

export const supabase = createClient(
	supabaseUrl || "https://placeholder.supabase.co",
	supabaseAnonKey || "public-anon-key-placeholder",
	{
		auth: {
			persistSession: false,
			autoRefreshToken: false,
		},
	},
);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
