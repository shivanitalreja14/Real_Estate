import axios from "axios";

export const baseUrl ='https://bayut.p.rapidapi.com'


export const  fetchApi = async(url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '832d5f1186msh7fd07276818c766p1212cejsn01b9356f394d'
            }

    });

    return data;
}