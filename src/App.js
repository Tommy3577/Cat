
import { useEffect, useState } from "react";

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
    </div>
  );
};

export default App;

