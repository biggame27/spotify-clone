import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";
import getSongs from "./getSongs";

const getSongsByTitle = async (title: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  })
  if (!title) {
    const allSongs = await getSongs();
    return allSongs;
  }
  const ids = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

  const { data, error } = await supabase.from('songs').select('*').in('id', ids).ilike('title', `%${title}%`).order('created_at', {ascending: false})
  if (error) {
    console.log(error);
  }

  return (data as any) || [];
}

export default getSongsByTitle