import React from "react";
import './movieRow.css'

const MovieRow = ({ titulo, lsFilmes }) => {
    //console.log(lsFilmes)
    //console.log('json: ' + lsFilmes)
    //console.log('log row: ' + lsFilmes.results.length)
    //console.log('log img: ' + lsFilmes[0].vote_count)

    return (
        <div>
            <h2>Titulo: {titulo}</h2>
            <div className="movieRow--listarea">
                {lsFilmes.results.map((item, key) => (
                    <p key={item.id}>
                        <h1>{item.poster_path}</h1>
                    </p>

                ))}
            </div>
        </div>
    )
};

//recebe as prop. titulo e o array de itens
export default MovieRow;

//<h4 key={key}>{filme.poster_path}</h4>
//<img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.original_title} key={key} />

/* <div className="movieRow--listarea">
{items.results.legth > 0 && items.results.map((item, key) => (
    <h2>{title}</h2>

))}
</div> */


//<img src={`https://image.tmdb.org/t/p/w300${item.items.poster_path}`} alt={item.original_title} key={key} />