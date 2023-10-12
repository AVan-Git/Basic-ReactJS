import React from 'react'
import Login from '../Login/Login'
import ModelHOC from '../../HOC/ModelHOC'
import UseStateDemo from '../UseStateDemo/UseStateDemo'
import HOCModel from '../../HOC/HOCModel'


//tao component tu HOC
let WrapFormLoginModal = ModelHOC(Login, 'Login') 
let WrapFormUseStateDemoModal = ModelHOC(UseStateDemo, 'UseStateDemo') 

export default function DemoHOC() {
  return (
    <div>
      DemoHOC

      {/* <WrapFormLoginModal />
      <WrapFormUseStateDemoModal /> */}

     {/* HOC cach 2 */}
     <HOCModel Component={Login} title={<h1 className='text-danger'>Login</h1>} id="modalId1"/>
     <HOCModel Component={UseStateDemo} id="modalId2"/>
    </div>
  )
}
