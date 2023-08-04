import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";

const getSongsByUserId = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  })

  const { data: sessionData, error: sessionError} = await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }
  const ids = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

  const {data, error } = await supabase.from('songs').select('*').in('id', ids).eq('user_id', sessionData.session?.user.id).order('created_at', {ascending: false});

  if (error) {
    console.log(error.message);
  }
  return (data as any) || [];
}

export default getSongsByUserId