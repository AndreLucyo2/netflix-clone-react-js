import React, { useEffect, useState } from "react";
import Tmdb from './tmdb.js';
import MovieRow from './components/movieRow.js'

function App() {
  //REACT: Salva alista para poder utilizar na tels
  const [movieList, setMovieList] = useState([]);

  //ao atualizar a pagina executa esta função
  useEffect(() => {

    //Requisitando toda a lista:
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      //DEBUG:
      console.log(list);
      console.log('-------------------------------------');
    };

    //Carregar a lista:
    loadAll();

  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (          
          <MovieRow key={key} titulo={item.title} lsFilmes ={item.items}/>          
        ))}
      </section>
    </div>
  );

}

export default App;

// export default () => {

//   //REACT: Salva alista para poder utilizar na tels
//   const [movieList, setMovieList] = useState([]);

//   //ao atualizar a pagina executa esta função
//   useEffect(() => {

//     //Requisitando toda a lista:
//     const loadAll = async () => {
//       let list = await Tmdb.getHomeList();
//       setMovieList(list);
      
//       //DEBUG:
//       console.log(list);
//       console.log('-------------------------------------');
//     };

//     //Carregar a lista:
//     loadAll();

//   }, [])

//   return (
//     <div className="page">
//       <section className="lists">
//         {movieList.map((item, key) => (          
//           <MovieRow key={key} titulo={item.title} lsFilmes ={item.items}/>          
//         ))}
//       </section>
//     </div>
//   );

// }
