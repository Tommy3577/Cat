
import { useEffect, useState } from "react";
var faker = require('faker');

var randomPrice1 = faker.commerce.price()
var randomCat1 = faker.animal.cat()
var randomfirstName1 = faker.name.firstName()
var randomPrice2 = faker.commerce.price()
var randomCat2 = faker.animal.cat()
var randomfirstName2 = faker.name.firstName()
var randomPrice3 = faker.commerce.price()
var randomCat3 = faker.animal.cat()
var randomfirstName3 = faker.name.firstName()
var randomPrice4 = faker.commerce.price()
var randomCat4 = faker.animal.cat()
var randomfirstName4 = faker.name.firstName()
var randomPrice5 = faker.commerce.price()
var randomCat5 = faker.animal.cat()
var randomfirstName5 = faker.name.firstName()
var randomPrice6 = faker.commerce.price()
var randomCat6 = faker.animal.cat()
var randomfirstName6 = faker.name.firstName()
var randomPrice7 = faker.commerce.price()
var randomCat7 = faker.animal.cat()
var randomfirstName7 = faker.name.firstName()
var randomPrice8 = faker.commerce.price()
var randomCat8 = faker.animal.cat()
var randomfirstName8 = faker.name.firstName()
var randomPrice9 = faker.commerce.price()
var randomCat9 = faker.animal.cat()
var randomfirstName9 = faker.name.firstName()
var randomPrice10 = faker.commerce.price()
var randomCat10 = faker.animal.cat()
var randomfirstName10 = faker.name.firstName()
var randomPrice11 = faker.commerce.price()
var randomCat11 = faker.animal.cat()
var randomfirstName11 = faker.name.firstName()
var randomPrice12 = faker.commerce.price()
var randomCat12 = faker.animal.cat()
var randomfirstName12 = faker.name.firstName()
var randomPrice13 = faker.commerce.price()
var randomCat13 = faker.animal.cat()
var randomfirstName13 = faker.name.firstName()
var randomPrice14 = faker.commerce.price()
var randomCat14 = faker.animal.cat()
var randomfirstName14 = faker.name.firstName()
var randomPrice15 = faker.commerce.price()
var randomCat15 = faker.animal.cat()
var randomfirstName15 = faker.name.firstName()
var randomPrice16 = faker.commerce.price()
var randomCat16 = faker.animal.cat()
var randomfirstName16 = faker.name.firstName()

// faker.seed(123);

// var firstRandom = faker.datatype.number();

// // Setting the seed again resets the sequence.
// faker.seed(123);

// var secondRandom = faker.datatype.number();

// console.log(firstRandom === secondRandom);






const App = () => {

  const [ Cat , setCat ] = useState("");

  const getCat = async () => {
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let CatData = await response.json();
    setCat(CatData[0]);
    
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <div>
      <h1>cats4lyf.co.uk</h1>
      <h2>Prime Posh Premium Pricey Pussy Purchases Place</h2>
      
            {Cat.url ? <p><img src = {Cat.url}  alt = "cat" width={Cat.width} height={Cat.height}></img></p> : <p>Loading...</p>}
      
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

