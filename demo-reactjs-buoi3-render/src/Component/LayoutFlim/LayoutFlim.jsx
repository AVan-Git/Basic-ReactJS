import React, { Component } from 'react'
import '../../fonts/scss/style.scss'
import dataFilm from '../../database/dataFilm'

const data = dataFilm;

export default class LayoutFlim extends Component {

    renderCardFilm = () => {
        return data.map((item, index) => {
            return <div className="col-lg-3 col-md-4 mt-2 text-center " key={index}>
                <img src={item.hinhAnh} alt="..." height={350} />
                <div className="card-body  text-white p-2" >
                    <h3 style={{height:60 }}>{item.tenPhim}</h3>
                    <p style={{height:75 }}>{item.moTa.length>100 ? item.moTa.slice(0,100)+ '...' : item.moTa }</p>
                </div>

            </div>
        })
    }

    render() {
        return (
            //css cach 1
            // <div style={{background:'url(./img/avenger.jpg)', minHeight: '100vh', backgroundSize: 'cover',
            //     backgroundPosition: 'bottom right'
            // }}>   

            // </div>

            //css cach 2
            <div className='bg_flim'>
                <div className="h-100" style={{ background: 'rgba(0,0,0,0.5)', minHeight: '100vh' }}>
                    {/* background:'rgba(0,0,0,0.5) === oparacity 0.5 */}

                    <nav className="navbar navbar-expand-sm navbar-dark " style={{ background: 'rgba(255,0,255,0.2)' }}>
                        <a className="navbar-brand" href="#">Cybersoft</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <a className="dropdown-item" href="#">Action 1</a>
                                        <a className="dropdown-item" href="#">Action 2</a>
                                    </div>
                                </li>
                            </ul>
                            <form className="d-flex my-2 my-lg-0">
                                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>

                    {/* render card film */}

                    <div className="row">{this.renderCardFilm()}</div>

                </div>
            </div>
        )
    }
}
