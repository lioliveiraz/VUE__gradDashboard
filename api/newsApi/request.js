import axios from 'axios';

export const getNewsFromApi = async (topic) => {
    const apiKey = process.env.VUE_APP_API_KEY;
    let url = `https://newsapi.org/v2/`;
    url += 'everything?qInTitle=';
    url += `"${topic}"`;
    url += "&sortBy=publishedAt&pageSize=3&language=en";
    url += "&from=" + new Date();
    url += '&apiKey=';
    url += apiKey;
    const response = await axios.get(url);
    return response.data;
};


