'use client'
import { useState, useEffect } from 'react';

export default function Home() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    console.log('fetching data');
    fetch(process.env.URL +'/api/scrape')
      .then(response => response.json())
      .then(data => setPrice(data.price))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <main className="h-screen flex flex-col justify-around items-center align-middle w-screen text-center ">
      <div>
        <h1>Precio del Dólar Blue</h1>
        <p>Venta: </p>   {!price ? <p>Cargando...</p> : <p>{price}</p>}
      </div>

    </main>
  );
}
