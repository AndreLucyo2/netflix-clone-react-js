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


export default {
    getHomeList: async () => {
        return [

            {
                slug: 'originals',
                tetle: 'Originais do Netflix',
                items: []
            },
            {
                slug: 'trending',
                tetle: 'Recomendados para você',
                items: []
            },
            {
                slug: 'toprated',
                tetle: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                tetle: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                tetle: 'Comedia',
                items: []
            },
            {
                slug: 'horror',
                tetle: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                tetle: 'Romance',
                items: []
            },
            {
                slug: 'documentary',
                tetle: 'Documentários',
                items: []
            },

        ]

    }

}