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
    //Executa e espera a resposta:
    const req = await fetch(`${API_BASEurl}${endPoint}`);
    
    //Quando recebe vai para este linha: espera a resposta
    const json = await req.json();
    //retorna:
    return json;
}

export default {
    getHomeList: async () => {
        return [

            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você da semana',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${API_KEY}`)
            },

        ]

    }

}