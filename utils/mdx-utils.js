import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;


export const getPosts = async () => {

    let supabase = createClient(supabaseUrl, supabaseKey);
    
    let { data: posts, error } = await supabase.from('posts').select('*');
    
    
    if(posts){
        return posts;
    }

    return [];
}

export const getPostById = async (id) => {

    let supabase = createClient(supabaseUrl, supabaseKey);

    let { data: posts, error } = await supabase.from('posts').select('*').eq('id', id);
    

    if(posts){
        return posts;
    }

    return [];
}