import './App.css' 

import Card from './components/Card'
import Basket from './components/Basket';
// import data from './data';



import { useEffect, useState, useRef } from "react";
let faker = require('faker');


const App = () => {

  const cardRef = useRef()

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
  const [ basket, setBasket ] = useState([]);

  const onFinish = (event) => {
    let id = event.target.id;
    console.log(id)
    if(id=== "1") {
      console.log('hurray')
    } else {
      console.log('still hurray')
    }
  }



  function handleSubmit(event) {
    event.preventDefault();
    const id = event.currentTarget.id;
    const newArray = [...basket]
    setBasket( [...basket, cats[id]])

    
    console.log(cats[id])
    // console.log(basket)
    // setBasket( () => newArray.push(cats[id]) )
  }

  function deleteBasket(id) {
    const updatedBasket = [...basket].filter((basket) => basket.id !== id)

    setBasket(updatedBasket)
  }
  

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

              <button onClick={onFinish} Id={'1'}>Next</button>
              <button onClick={onFinish} Id={'2'}>Next</button>
              <br/>


              {basket.map((item, index) => (
                        <Basket name={item.name} price={item.price} breed={item.breed}/>
                      ))}
              


            </div>
            <div class="content" contenteditable>

                <div className='header'>

                </div>

                <div className='cards-container'>

                {cats.map((cat, index) => (
                      <Card key={index} url={cat.image} handleSubmit={handleSubmit} price={cat.price} name={cat.name} breed={cat.breed} id={index} cardRef={cardRef} />
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