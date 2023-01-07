import client from "../../apis/clinet";

export const homeService = () => {
    return client.get('/home');
}