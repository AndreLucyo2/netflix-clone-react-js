import React from "react";
import { useEffect } from 'react';
import Tmdb from './tmdb.js';

export default () => {

  //ao atualizar a pagina executa esta função
  useEffect(() => {

    //Requisitando toda a lista:
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list);

    };
    loadAll();

  }, [])

  return (
    <div>
      Olá Mundo!
    </div>
  )
}