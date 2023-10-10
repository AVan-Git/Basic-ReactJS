import React from 'react'
import useRoute from '../../hooks/useRoute'

export default function DemoUseRoute() {

    const {navigate, params, searchParams:[searchParams, setSearchParams] } = useRoute()

    console.log({navigate, params, searchParams:[searchParams, setSearchParams] });
  return (
    <div>
      
    </div>
  )
}
