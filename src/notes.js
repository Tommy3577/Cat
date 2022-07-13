// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import { useEffect, useState } from "react"
// const App = () => {
//  const [advice, setAdvice] = useState("")

//  const getData = async () => {
//   // let response  = await fetch("https://api.adviceslip.com/advice")
  
//   let response  = await fetch("https://a.4cdn.org/boards.json")
//   let data = await response.json()
//   setAdvice(data.slip)
//   // setAdvice(data[0])
//   // for array
//  }
//  useEffect(() => {
//   getData()
// }, [])
//  return (
  
//   <div>
//     <h1>Hi </h1>
//       <h2>{advice.advice}</h2>

//       {/* <h2>{setAdvice}</h2> */}
//       <button onClick={getData}>get data</button>
    
    




//   </div>
//  )
// }

// export default App


// // FROM ARRAY______________________________________________________________________________________________________
// import { useEffect, useState } from "react";
// const App = () => {
//   const [item, setItem] = useState("");

//   const getData = async () => {
//     let response = await fetch("https://a.4cdn.org/po/2.json");
//     let data = await response.json();
//     setItem(data[0]);
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       <h1>{threads.posts}</h1>
//       {posts ? (
//         posts.com.map((posts, index) => {
//           return <posts posts={posts} />;
//         })
//       ) : (
//         <p>loading...</p>
//       )}
//       <button onClick={getData}>get data</button>
//     </div>
//   );
// };

// const posts = ({ posts }) => {
//   return (
//     <div>
//       <h1>{posts}</h1>
//     </div>
//   );
// };
// export default App;

// // FROM ARRAY______________________________________________________________________________________________________



// // FROM ARRAY______________________________________________________________________________________________________
// import { useEffect, useState } from "react";
// const App = () => {
//   const [item, setItem] = useState("");

//   const getData = async () => {
//     let response = await fetch("https://api.punkapi.com/v2/beers/random");
//     let data = await response.json();
//     setItem(data[0]);
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div>
//       <h1>{item.name}</h1>
//       {item ? (
//         item.food_pairing.map((food, index) => {
//           return <Food food={food} />;
//         })
//       ) : (
//         <p>loading...</p>
//       )}
//       <button onClick={getData}>get data</button>
//     </div>
//   );
// };

// const Food = ({ food }) => {
//   return (
//     <div>
//       <h1>{food}</h1>
//     </div>
//   );
// };
// export default App;

// // FROM ARRAY______________________________________________________________________________________________________





          // {/* {advice.advice ?
          // <p>{advice.advice}</p>
          // :
          // <p>error</p> */}
            
          // {/* {advice.sltip.advice ?
          // <h2>{advice.slip.advice}</h2>
          // :
          // <h2>no data</h2>
          // } */}

// import './App.css';
// import {useState} from 'react'

// function App() {
//   const [cookie, setCookie] = useState('');
//   const getData = async () =>{
//     let res = await fetch('https://api.adviceslip.com/advice');
//     let data = await res.json();
//     setCookie(data.slip);
//   }
//   return (
//     <div className="App">
//       <h1>Fortune Cookie</h1>
//       {cookie.advice ?
//       <h2>{cookie.advice}</h2>
//     :
//     <h2>no cookie</h2>}
//       <button onClick={getData}>open cookie</button>
//     </div>
//   );
// }

// export default App;




// import './App.css';
// import { useState, useEffect } from 'react'

// function App() {
//   const [pokemon, setPokemon] = useState('');

//   const getData = async () => {
//     let res = await fetch('https://pokeapi.co/api/v2/pokemon/');
//     let data = await res.json();
//     setPokemon(data.results);
//   };

//   useEffect(() => { getData() }, []);


//   return (

//     < div className="App" >

//       {pokemon.map((monster, index) => {
//         return <h1>{monster.name}</h1>
//       })}

//       < button onClick={getData} > open ball</button >
//     </div >
//   );
// }

// export default App;



// import './App.css';
// import { useState, useEffect } from 'react'

// function App() {
//   const [Chan, setChan] = useState('');

//   const getData = async () => {
//     let res = await fetch('https://a.4cdn.org/po/2.json');
//     let data = await res.json();
//     setChan(data.results);
//   };

//   useEffect(() => { getData() }, []);


//   return (

//     < div className="App" >

//       {Chan.map((post, index) => {
//         return <h1>{post.com}</h1>
//       })}

//       < button onClick={getData} > open ball</button >
//     </div >
//   );
// }

// export default App;



// import "./App.css";
// import { useEffect, useState } from "react";

// const App = () => {
//   //TODO -=- MMO Games (Unknown)  -  Works

//   const [dump, setDump] = useState("");

//   const getData = async () => {
//     let response = await fetch("https://api.tronalddump.io/random/quote");
//     let data = await response.json();
//     setDump(data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       <h1>Tronald Dump</h1>
      
//       {dump.tags ? <p>Referring to: {dump.tags}</p> : <p>Dumping...</p>}
//       {dump.value ? <p>{dump.value}</p> : <p>Dumping...</p>}

//       {dump._embedded ? <p>{dump._embedded.source[0].url}</p> : <p>Dumping...</p>}

//       <button onClick={getData}>get dump</button>
//     </div>
//   );
// };

// export default App;



// import { useEffect, useState } from "react";

// const App = () => {

//   const [ Cat , setCat ] = useState("");

//   const getCat = async () => {
//     let response = await fetch("https://api.thecatapi.com/v1/images/search");
//     let CatData = await response.json();
//     setCat(CatData[0]);
    
// //     setItem(data[0]);
//   };

//   useEffect(() => {
//     getCat();
//   }, []);

//   return (
//     <div>
//       <h1>cats4lyf.co.uk</h1>
//       <h2>Prime Premium Pricey Pussy Purchases Place</h2>

//       {/* {Cat.breeds ? <p>Referring to: {Cat.breeds}</p> : <p>Loading...</p>} */}
//       {/* {Cat.id ? <p>{Cat.id}</p> : <p>Loading...</p>} */}
//       {/* {Cat.url ? <p><img src = {Cat.url}></img>: <p>Loading...</p>} */}

//       {/* {Cat.breeds ? <p>Cat Breeds: { Cat.breeds }</p> : <p>Loading...</p>} */}
//       {/* {Cat.id ? <p>Cat ID: { Cat.id }</p> : <p>Loading...</p>} */}

//       {/* //       {dump._embedded ? <p>{dump._embedded.source[0].url}</p> : <p>Dumping...</p>} */}
      
//             {Cat.url ? <p><img src = {Cat.url}  alt = "cat" width={Cat.width} height={Cat.height}></img></p> : <p>Loading...</p>}
//       {/* <p>URL: {Cat.url}</p> */}
//       {/* <p><img src = {Cat.url}  alt = "cat" width={Cat.width} height={Cat.height}></img></p> */}
//       <button onClick={getCat}>Load cat</button>
//     </div>
//   );
// };

// export default App;



// Please complete Assessment [GH6] 'Cats4Lyf' prepared by Leon Cooper: So I have totally made up cats4lyf.co.uk but what I want you to do is make an e-commerce site where you can “buy” cats!

// You need to create a site that fulfils the following requirements:
// • (cat) images come from an API (https://thecatapi.com/) (https://api.thecatapi.com/v1/images/search)
// • Display page of products (cats) with images for each from api ^ (product landing page)
// • Ability to add each product (cat) to the basket (https://www.npmjs.com/package/faker is create for making fake data to pad out the info on a product)
// • Calculate total price of the items (pets) in the basket
// • Basket needs to be a side panel or a modal that is displayed when you press the basket button

// [
// 	{
// 		"breeds": [],
// 		"id": "746",
// 		"url": "https://cdn2.thecatapi.com/images/746.jpg",
// 		"width": 500,
// 		"height": 375
// 	}
// ]



