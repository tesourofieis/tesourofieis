import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://zdwrtqpixfuytywdmcky.supabase.co";
const supabaseAnonKey = 'sb_publishable_YUCGfCx0T2KEdKCiqDqSHg_qOjBkn49';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
