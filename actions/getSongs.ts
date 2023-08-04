import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";

const getSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  })

  const ids = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

  const { data, error } = await supabase.from('songs').select('*').in('id', ids).order('created_at', {ascending: false})
  if (error) {
    console.log(error);
  }

  return (data as any) || [];
}

export default getSongs