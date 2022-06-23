import React, { useEffect, useState } from "react";
import Tmdb from './tmdb.js';
import MovieRow from './components/movieRow.js'

export default () => {

  //REACT: Salva alista para poder utilizar na tels
  const [movieList, setMovieList] = useState([]);

  //ao atualizar a pagina executa esta função
  useEffect(() => {

    //Requisitando toda a lista:
    const loadAll = async () => {

      let list = await Tmdb.getHomeList();
      //console.log(list);
      setMovieList(list);
    };

    //Carregar a lista:
    loadAll();

  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title = {item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );

}