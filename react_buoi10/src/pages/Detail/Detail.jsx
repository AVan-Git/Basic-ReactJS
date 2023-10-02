import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {

  // sd useParams de nhan data truyen toi theo router
  const params = useParams();
  return (
    <div>
      Details -- Id: {params.id} 
    </div>
  )
}

