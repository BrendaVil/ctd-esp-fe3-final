import React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Card from '../Components/Card';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = ({}) => {

  const [data, setData] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then(res => setData(res.data))
  },[])

return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data.map((item) => <Card key={item.id} dentist={item}/>)}
      </div>
    </main>
  )
}

export default Home