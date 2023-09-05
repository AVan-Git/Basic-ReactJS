import React, { Component } from 'react'

export default class ItemProduct extends Component {
    render() {
        let {item, viewDetail} = this.props
        return (
            <>
                <div className="card">
                    <img className="card-img-top" src={item.img} alt="Title" width="{100}" />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">{item.price}</p>
                        <button type="button" 
                            class="btn btn-primary"
                            onClick={() => {
                                viewDetail(item)
                            }}
                            data-bs-toggle="modal" data-bs-target="#modalId">Detail</button>
                    </div>
                </div>

            </>
        )
    }
}
