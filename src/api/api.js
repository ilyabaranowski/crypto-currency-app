import axios from "axios";

const urlApi = import.meta.env.VITE_URL_API
const keyApi = import.meta.env.VITE_KEY_API

export const getCoins = async () => {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': keyApi,
        },
    };
    try {
        const response = await axios.get(urlApi + '/coins', options);
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
}
