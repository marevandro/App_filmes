import axios from 'axios';

//URL FILMES EM CARTAZ

//URL base
//https://api.themoviedb.org/3

//URL filmes em cartaz
// /movie/now_playing?api_key=6f4cd65a0be0050f4b6af21ae5bcd0bc&language=pt-BR&page=1

export const key = '6f4cd65a0be0050f4b6af21ae5bcd0bc'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    })

export default api; 