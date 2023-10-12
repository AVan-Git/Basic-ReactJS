import React from 'react'
import Login from '../Login/Login'
import ModelHOC from '../../HOC/ModelHOC'
import UseStateDemo from '../UseStateDemo/UseStateDemo'


//tao component tu HOC
let WrapFormLoginModal = ModelHOC(Login, 'Login') 
let WrapFormUseStateDemoModal = ModelHOC(UseStateDemo, 'UseStateDemo') 

export default function DemoHOC() {
  return (
    <div>
      DemoHOC

      <WrapFormLoginModal />
      <WrapFormUseStateDemoModal />
    </div>
  )
}
