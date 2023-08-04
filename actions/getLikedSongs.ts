import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";

const getLikedSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  })

  const {
    data: {
      session
    }
  } = await supabase.auth.getSession();
  const ids = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

  const { data, error } = await supabase.from('liked_songs').select('*, songs(*)').in('id', ids).eq('user_id', session?.user?.id).order('created_at', {ascending: false})
  if (error) {
    console.log(error);
    return [];
  }

  if (!data) {
    return [];
  }

  return data.map((item) => ({
    ...item.songs
  }))
}

export default getLikedSongs