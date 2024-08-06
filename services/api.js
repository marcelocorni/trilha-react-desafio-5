import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://sqwiwdilkdrguhwzwzfa.supabase.co/rest/v1',
    headers: {
        apikey: "API_KEY",
        authorization: "API_SECRET"
    }
})
