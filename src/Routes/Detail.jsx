import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const id = useParams()
  const [result, setResult] = useState([])

   
   fetch(`https://jsonplaceholder.typicode.com/users/${id.id}`)
   .then(response => response.json())
   .then(data => setResult(data))

   return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <p>Name: {result.name}</p>
      <p>Email: {result.email}</p>
      <p>Phone: {result.phone}</p>
      <p>Web site: {result.website}</p>
    </>
  )
}

export default Detail