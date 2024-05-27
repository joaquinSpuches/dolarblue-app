'use client'
import { useState, useEffect } from 'react';

export default function Home() {
    const [price, setPrice] = useState(null);

    useEffect(() => {
        fetch('/api/scrape')
            .then(response => response.json())
            .then(data => setPrice(data.price))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

  return (
    <main className="h-screen flex flex-col justify-around items-center align-middle w-screen text-center ">
     
     

        <div>
            <h1>Precio del Dólar Blue</h1>
            {price ? <p>Venta: {price}</p> : <p>Cargando...</p>}
        </div>

    </main>
  );
}
