const API_KEY = '488822f9eadf3c668dfdd998e64474bf'
const API_BASEurl = 'https://api.themoviedb.org/3'

/*
- otiginais da netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comedia
- terror
- romance
- documentários  
*/

//Manda um endpoint requisita e retorna um json
const basicFetch = async (endPoint) => {
    const req = await fetch(`${API_BASEurl}${endPoint}`)
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [

            {
                slug: 'originals',
                tetle: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                tetle: 'Recomendados para você da semana',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                tetle: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                tetle: 'Ação',
                items: await basicFetch(`/discover/movie/with_genres=28?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                tetle: 'Comedia',
                items: await basicFetch(`/discover/movie/with_genres=35?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                tetle: 'Terror',
                items: await basicFetch(`/discover/movie/with_genres=27?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                tetle: 'Romance',
                items: await basicFetch(`/discover/movie/with_genres=10749?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                tetle: 'Documentários',
                items: await basicFetch(`/discover/movie/with_genres=99?language=pt-BR&api_key=${API_KEY}`)
            },

        ]

    }

}