import React from "react";
import { useEffect, useState } from 'react';
import Tmdb from './tmdb.js';

export default () => {

  //ao atualizar a pagina executa esta função
  useEffect(() => {

    //REACT: Salva alista par apoder utilizar na tels
    const [movieList, setMovieList] = useState([]);

    //Requisitando toda a lista:
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      //console.log(list);
      setMovieList(list);

    };

    loadAll();

  }, [])

  return (
    <div className="page">
      Header
      Destaque
      As listas
      Rodapé
    </div>
  )
}