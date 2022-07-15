import { useEffect, useState } from "react";
import Basket from './components/Basket';
import Card from './components/Card'
import './App.css' 

const App = () => {

  let faker = require('faker');

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

  function handleSubmit(item) {
    const newArray = [...basket]
    newArray.push(item)
    setBasket( newArray )
  }

  function deleteBasket(item) {

    const updatedBasket = [...basket].filter((cat) => cat !== item)
    console.log(updatedBasket)

    setBasket(updatedBasket)
  }

  function totalBasket() {
    for (let i = 0; i < basket.length; i++) {
      let sum = 0;
      sum += basket[i].price;
      console.log('sum')
    }
  }
  


  const getCat = async () => {

    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20')
    const data =  await response.json()

    // make an array of image objects
    let newArray = []
    data.map( x => x.url ).forEach( element  => {
      newArray.push({
        image: element
      })
    })

    // make an array of cat objects
    newArray.forEach( (element) => {
      element.name = faker.name.firstName()
      element.price = faker.commerce.price()
      element.breed = faker.animal.cat()
      element.id = new Date().getTime()
    })

    // set cats state 
    setCats( newArray )
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <>
      <div className='body'>
        
          <div class="sidebar" contenteditable>
              {basket.map((cat, index) => (
                        <Basket cat={cat} deleteBasket={deleteBasket} key={index}/>
                      ))}
            </div>

            <div class="content" contenteditable>

                <div className='header'>

                </div>

                <div className='cards-container'>
                  
                  {cats.map((cat, index) => (
                        <Card key={index} handleSubmit={handleSubmit} cat={cat} />
                      ))}

                </div>
            </div>
      </div>
    </>
  );
};

export default App;