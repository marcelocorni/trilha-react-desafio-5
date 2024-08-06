import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://sqwiwdilkdrguhwzwzfa.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxd2l3ZGlsa2RyZ3Vod3p3emZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MDQ2MTcsImV4cCI6MjAzODQ4MDYxN30.RKthQ5tYJqV6_lnDWeUl1WLZ66C9xLVoj6EMdgdd0Gs",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxd2l3ZGlsa2RyZ3Vod3p3emZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MDQ2MTcsImV4cCI6MjAzODQ4MDYxN30.RKthQ5tYJqV6_lnDWeUl1WLZ66C9xLVoj6EMdgdd0Gs"
    }
})