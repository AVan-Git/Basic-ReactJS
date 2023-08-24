import React, { Component } from 'react'
// import '../index.css'   --- import o file index.js để dễ quản lý

import styles from './StyleWithJSX.module.scss'

export default class StyleWithJSX extends Component {
    render() {
        return (
            <div className='container'>
                <h3>StyleWithJSX</h3>
                <p className='text-red'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptas ipsum sunt minima debitis a fugit voluptates magnam. 
                    Est at eum veniam, suscipit, corrupti, sapiente dolores dicta doloremque eveniet natus tempora.</p>

{/*  */}
                    <h3 className={`p-2 bg-info  ${styles['text-blue']}`}>Hello font end</h3>
            {/* cach 3 dau css truc tiep  */}
            <h3 style={{color:'pink'}}>Hello world!!!</h3>
            </div>
        )
    }
}
