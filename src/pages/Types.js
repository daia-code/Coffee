import React from 'react'
import Coffee from '../components/Coffee'
import './Types.css'
export default function Types() {
  return (
    <div className='positionCoffee'>
        <Coffee documentId="1" /> {/* Replace "1" with the desired document ID */}
         <Coffee documentId="2" /> {/* Replace "2" with another document ID */}
        <Coffee documentId="3"/>
    </div>
  )
}
