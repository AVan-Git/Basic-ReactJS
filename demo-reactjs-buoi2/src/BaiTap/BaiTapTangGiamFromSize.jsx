import React, { Component } from 'react'

export default class BaiTapTangGiamFromSize extends Component {

    state = {
        fSize: 18,
    }
    render() {
        return (
            <div>
                <h3 className="text-center text-danger ">BaiTapTangGiamFromSize</h3>
                <hr/>
                <div className="container">
                    <p style={{fontSize: this.state.fSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum accusantium, tempora ea esse reiciendis quo, delectus corporis neque iusto rerum et distinctio.
                        Voluptates rem totam odit aliquam rerum labore laboriosam.</p>


                    <div className='m-2'>
                        <button type="button" className="btn btn-danger m-2" onClick={() => {
                            this.setState({
                                fSize: ++this.state.fSize,
                            })
                        }}>+</button>
                        <>{this.state.fSize}</>
                        <button type="button" className="btn btn-success m-2"onClick={() => {
                            let a = this.state.fSize;
                            if (a==1) {
                                 return
                            }
                            this.setState({
                                fSize: --a,
                            })
                        }}> - </button>
                    </div>

                </div>
            </div>
        )
    }
}
