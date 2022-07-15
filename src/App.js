import { useEffect, useState } from "react";
import Basket from './components/Basket';
import Card from './components/Card'
import './App.css' 

const App = () => {

  let faker = require('faker');

  const [ cats , setCats ] = useState([]);
  const [ basket, setBasket ] = useState([]);
  const [ total, setTotal ] = useState(0)

  function handleSubmit(item) {
    const newArray = [...basket]
    newArray.push(item)
    setBasket( newArray )
  }

  function deleteBasket(index) {
    let storedItems = [...basket]
    storedItems.splice(index, 1)
    setBasket(storedItems)
  }

  function totalBasket() {

    let sum = 0
    for (let i = 0; i < basket.length; i++) {
      sum += parseInt(basket[i].price)
    }
    setTotal( sum )
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
    })

    // set cats state 
    setCats( newArray )
  };

  useEffect(() => {
    getCat();
  }, []);

  useEffect(() => {
    totalBasket();
  }, [basket]);

  return (
      <div className='body'>
                {total ? 
              <div class="sidebar" contenteditable>
              {basket.map((cat, index) => (
                        <Basket cat={cat} deleteBasket={deleteBasket} key={index}/>
                      ))}
              <div className="total-container">
              {total ? <p>Total: £{total}.00</p> : <span></span>}
              </div>
            </div>:<span></span>
              }
              
          <div class="content" contenteditable>

              <div className='header'>
                <p className='title'>Cats 4 Lyf</p>
                  <p className='subTitle'>
                  Please select one out our Puurrfect Pets to puurrchase!  
                  </p>
              </div>

              <div className='cards-container'>
                
                {cats.map((cat, index) => (
                      <Card key={index} handleSubmit={handleSubmit} cat={cat} />
                    ))}

              </div>
          </div>
    </div>
  );
};

export default App;