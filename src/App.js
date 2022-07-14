
import Card from './components/Card'
// import Basket from './components/Basket';
// import data from './data';


import { useEffect, useState } from "react";
let faker = require('faker');

let randomPrice1 = faker.commerce.price()
let randomCat1 = faker.animal.cat()
let randomfirstName1 = faker.name.firstName()
let randomPrice2 = faker.commerce.price()
let randomCat2 = faker.animal.cat()
let randomfirstName2 = faker.name.firstName()
let randomPrice3 = faker.commerce.price()
let randomCat3 = faker.animal.cat()
let randomfirstName3 = faker.name.firstName()
let randomPrice4 = faker.commerce.price()
let randomCat4 = faker.animal.cat()
let randomfirstName4 = faker.name.firstName()
let randomPrice5 = faker.commerce.price()
let randomCat5 = faker.animal.cat()
let randomfirstName5 = faker.name.firstName()
let randomPrice6 = faker.commerce.price()
let randomCat6 = faker.animal.cat()
let randomfirstName6 = faker.name.firstName()
let randomPrice7 = faker.commerce.price()
let randomCat7 = faker.animal.cat()
let randomfirstName7 = faker.name.firstName()
let randomPrice8 = faker.commerce.price()
let randomCat8 = faker.animal.cat()
let randomfirstName8 = faker.name.firstName()
let randomPrice9 = faker.commerce.price()
let randomCat9 = faker.animal.cat()
let randomfirstName9 = faker.name.firstName()
let randomPrice10 = faker.commerce.price()
let randomCat10 = faker.animal.cat()
let randomfirstName10 = faker.name.firstName()
let randomPrice11 = faker.commerce.price()
let randomCat11 = faker.animal.cat()
let randomfirstName11 = faker.name.firstName()
let randomPrice12 = faker.commerce.price()
let randomCat12 = faker.animal.cat()
let randomfirstName12 = faker.name.firstName()
let randomPrice13 = faker.commerce.price()
let randomCat13 = faker.animal.cat()
let randomfirstName13 = faker.name.firstName()
let randomPrice14 = faker.commerce.price()
let randomCat14 = faker.animal.cat()
let randomfirstName14 = faker.name.firstName()
let randomPrice15 = faker.commerce.price()
let randomCat15 = faker.animal.cat()
let randomfirstName15 = faker.name.firstName()
let randomPrice16 = faker.commerce.price()
let randomCat16 = faker.animal.cat()
let randomfirstName16 = faker.name.firstName()

// faker.seed(123);

// let firstRandom = faker.datatype.number();

// // Setting the seed again resets the sequence.
// faker.seed(123);

// let secondRandom = faker.datatype.number();

// console.log(firstRandom === secondRandom);

// const CatImage = () => {
//   const [cat, setCat] = useState("");

//   const getCat = async () => {
//       let response = await fetch("");
//       let data = await response.json();
//       setItem(data[0]);
//       };
//       useEffect(() => {
//       getCat();
//       }, []);
//   return (
//   <div>
//       {cat ? (
//       cat.cat_image.map((cat, index) => {
//           return <Image image={image} />;
//       })
//       ) : (
//       <p>loading...</p>
//       )}
//       <button onClick={getCat}>get cat image</button>
//   </div>
//   );
// };



const App = () => {

  // const { cards } = data;
  // // needs to be added to main (displaying component) -- we are getting the CARDS from the CAT DATA
  // const [basketItems, setBasketItems] = useState([]);
  // const onAdd = (cards) => {
  //   {setBasketItems([...basketItems, {...cards, qty: 1}])}
  // }

  // const onRemove = (card) => {
  //   const exist = basketItems.find((x) => x.id === card.id);
  //   if(exist.qty === 1) {
  //     setBasketItems(basketItems.filter((x) => x.id !== card.id))
  //   }
  // }


  

  const [ cat , setCat ] = useState([]);

  const getCat = () => {

    let urls = []
    const getOneCat = async () => {

      let response = await fetch("https://api.thecatapi.com/v1/images/search");
      let data = await response.json();
      let url = data[0].url
      urls.push(url)
    }

    Array.from(Array(16)).map( x => {
      getOneCat()
    })

    setCat( prev => urls )
    console.log( cat )

  };

  useEffect(() => {
    getCat();
  }, []);


// const App = () => {


  

//   const [ Cat , setCat ] = useState("");

//   const getCat = async () => {
//     let response = await fetch("https://api.thecatapi.com/v1/images/search");
//     let CatData = await response.json();
//     setCat(CatData[0]);
//   };

//   useEffect(() => {
//     getCat();
//   }, []);

  return (
    <div>

      <Card url="https://cdn2.thecatapi.com/images/252.jpg"  price={faker.commerce.price()} name={faker.name.firstName()} breed={faker.animal.cat()}/>
      <Card url="https://cdn2.thecatapi.com/images/252.jpg"  price={faker.commerce.price()} name={faker.name.firstName()} breed={faker.animal.cat()}/>

      <h1>cats4lyf.co.uk</h1>
      <h2>Prime Posh Premium Pricey Pussy Purchases Place</h2>
      
            {/* {Cat.url ? <p><img src = {Cat.url}  alt = "cat" width={Cat.width} height={Cat.height}></img></p> : <p>Loading...</p>}
            {Cat.url ? <p><img src = {Cat.url}  alt = "cat" width={Cat.width} height={Cat.height}></img></p> : <p>Loading...</p>} */}
            {cat.url ? <p><img src = {cat.url}  alt = "cat" width="300px" height="300px"></img></p> : <p>Loading...</p>}
            {cat.url ? <p><img src = {cat.url}  alt = "cat" width="300px" height="300px"></img></p> : <p>Loading...</p>}
            {/* {Cat.url ? <p><img src = {Cat.url}  alt = "cat" width="300px" height="300px"></img></p> : <p>Loading...</p>} */}
                 {/* {cat ? (cat.url.map((cat, index) => {return <Image image={image} />; */}
                 {/* })) : (<p>loading...</p>)} */}
      <button onClick={getCat}>Load cat</button>

      <h2> Cat price {randomPrice1} </h2>
      <h2> Cat Breed {randomCat1} </h2>
      <h2> Cat Name  {randomfirstName1} </h2>

      <h2> Cat price  {randomPrice2} </h2>
      <h2> Cat Breed  {randomCat2} </h2>
      <h2> Cat Name   {randomfirstName2} </h2>
      
      <h2> Cat price  {randomPrice3} </h2>
      <h2> Cat Breed  {randomCat3} </h2>
      <h2> Cat Name   {randomfirstName3} </h2>
      
      <h2> Cat price  {randomPrice4} </h2>
      <h2> Cat Breed  {randomCat4} </h2>
      <h2> Cat Name   {randomfirstName4} </h2>
      
      <h2> Cat price  {randomPrice5} </h2>
      <h2> Cat Breed  {randomCat5} </h2>
      <h2> Cat Name   {randomfirstName5} </h2>
      
      <h2> Cat price  {randomPrice6} </h2>
      <h2> Cat Breed  {randomCat6} </h2>
      <h2> Cat Name   {randomfirstName6} </h2>
      
      <h2> Cat price  {randomPrice7} </h2>
      <h2> Cat Breed  {randomCat7} </h2>
      <h2> Cat Name   {randomfirstName7} </h2>
      
      <h2> Cat price  {randomPrice8} </h2>
      <h2> Cat Breed  {randomCat8} </h2>
      <h2> Cat Name   {randomfirstName8} </h2>
      
      <h2> Cat price  {randomPrice9} </h2>
      <h2> Cat Breed  {randomCat9} </h2>
      <h2> Cat Name   {randomfirstName9} </h2>
      
      <h2> Cat price  {randomPrice10} </h2>
      <h2> Cat Breed  {randomCat10} </h2>
      <h2> Cat Name   {randomfirstName10} </h2>

      <h2> Cat price  {randomPrice11} </h2>
      <h2> Cat Breed  {randomCat11} </h2>
      <h2> Cat Name   {randomfirstName11} </h2>
      
      <h2> Cat price  {randomPrice12} </h2>
      <h2> Cat Breed  {randomCat12} </h2>
      <h2> Cat Name   {randomfirstName12} </h2>

      <h2> Cat price  {randomPrice13} </h2>
      <h2> Cat Breed  {randomCat13} </h2>
      <h2> Cat Name   {randomfirstName13} </h2>
      
      <h2> Cat price  {randomPrice14} </h2>
      <h2> Cat Breed  {randomCat14} </h2>
      <h2> Cat Name   {randomfirstName14} </h2>

      <h2> Cat price  {randomPrice15} </h2>
      <h2> Cat Breed  {randomCat15} </h2>
      <h2> Cat Name   {randomfirstName15} </h2>
      
      <h2> Cat price  {randomPrice16} </h2>
      <h2> Cat Breed  {randomCat16} </h2>
      <h2> Cat Name   {randomfirstName16} </h2>
    
    </div>
  );
};

export default App;

