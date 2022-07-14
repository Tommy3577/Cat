import './App.css'


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

const App = () => {

  // make basket state: array of cat objects
  // make handleAddItem: input will be the items key, it will then add a cat with that key to the basket
  // make handelRemoveItem: input will be an event, it will happen onClick, input may also be an index, removes an item from the absket at a specific index


  // Basket - leave it shaun!!

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

  const [ cats , setCats ] = useState([]);

  const getCat = async () => {

    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20')
    const data =  await response.json()
    // make array of image strings
    let imageArray = data.map( x => x.url )

    // make an array of image objects
    let objectArray = []
    imageArray.forEach( element  => {
      objectArray.push({
        image: element
      })
    })

    // make an array of cat objects
    objectArray.forEach( (element) => {
      element.name = faker.name.firstName()
      element.price = faker.commerce.price()
      element.breed = faker.animal.cat()
    })

    // set cats state 
    setCats( objectArray )
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <>


      <div className='body'>
        
          <div class="sidebar" contenteditable>
              Min: 150px
              <br/>
              Max: 25%
            </div>
            <div class="content" contenteditable>

                <div className='header'>

                </div>

                <div className='cards-container'>

                {cats.map((cat, index) => (
                      <Card key={index} url={cat.image}  price={cat.price} name={cat.name} breed={cat.breed}/>
                    ))}
                    
                </div>
                
            </div>
            
      </div>






      {/* <h1>cats4lyf.co.uk</h1>
      <h2>Prime Posh Premium Pricey Pussy Purchases Place</h2>
       */}
            {/* {Cat.url ? <p><img src = {Cat.url}  alt = "cat" width={Cat.width} height={Cat.height}></img></p> : <p>Loading...</p>}
            {Cat.url ? <p><img src = {Cat.url}  alt = "cat" width={Cat.width} height={Cat.height}></img></p> : <p>Loading...</p>} */}
            {/* {cats.url ? <p><img src = {cats.url}  alt = "cat" width="300px" height="300px"></img></p> : <p>Loading...</p>} */}
            {/* {cats.url ? <p><img src = {cats.url}  alt = "cat" width="300px" height="300px"></img></p> : <p>Loading...</p>} */}
            {/* {Cat.url ? <p><img src = {Cat.url}  alt = "cat" width="300px" height="300px"></img></p> : <p>Loading...</p>} */}
                 {/* {cat ? (cat.url.map((cat, index) => {return <Image image={image} />; */}
                 {/* })) : (<p>loading...</p>)} */}
      {/* <button onClick={getCat}>Load cat</button>

      <h2> Cat price {randomPrice1} </h2>
      <h2> Cat Breed {randomCat1} </h2>
      <h2> Cat Name  {randomfirstName1} </h2> */}

    
    </>
  );
};

export default App;

