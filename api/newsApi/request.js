import axios from 'axios';

export const getNewsFromApi = async (topic, language) => {
    const apiKey = process.env.apiKey;
    let url = `https://newsapi.org/v2/`;
    url += 'everything?qInTitle=';
    url += `"${topic}"`;
    url += "&pageSize=3&language=";
    url += language;
    url += "&from=" + new Date();
    url += '&apiKey=';
    url += apiKey;
    const response = await axios.get(url);
    return response.data;
};


