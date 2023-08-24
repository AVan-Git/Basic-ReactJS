import React, { Component } from 'react'

export default class StateDemo extends Component {
    // state : la thuoc tinh co san cua rcc chứa các giá trị thay đổi trên giao diện
    // khi state thay đổi giao dien sẽ tự (render)thay đổi

    state = {
        login: false
    }
    // login = false;


    renderLogin = () => {
        if (this.state.login === true) {
            return <div><span className='text-light'>Hello reactJs</span>
                <button type="button" className='btn btn-danger' onClick={() => {
                    this.setState({
                        login: false
                    }, () => {
                        console.log(`State.login: ${this.state.login}`)
                     })
                    // dung ham đề chắc chắn chạy xong setState mới tiêp tục chạy chương trình

                    
                }}>Logout</button>
            </div>
        }
        return <div>
            <button type="button" className="btn btn-outline-success mr-2" onClick={() => {
                // this.state.login = true;    ---- không dc thay đôi state truc tiếp ma phai thong qua phuong thuc setState()
                // this.render();
                this.handleLogin();
            }} >Login</button>

        </div>
    }

    handleLogin = () => {
        // handleLogin = async () => {  // c1

        let newState = {
            login: true
        }
        // cach2 
        this.setState(newState, () => {
            //ham nay sẽ đợi sau kia setState xong mới thực hiện
        })

        // await this.setState(newState)   ///--- cach 1   acync wait dung để dừng đợi setState thanh công mới chạy tiếp

        /*  
        ///            --- setState  là phương thức có sẵn của rcc
        // setState() --- là phương thức bất đồng bộ acync wait
        */
        console.log("🚀 ~ file: StateDemo.jsx:33 ~ StateDemo ~ newState:", newState)


    }

    render() {
        return (
            <div className='container'>
                <h2 className="text-red">StateDemo</h2>
                <hr />
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
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
                        <div className="d-flex my-2 my-lg-0 align-items-center m-2">
                            {/* toan tu 3 ngoi  */}
                            {/* {this.login === true ? <span className='text-light'>Hello reactJs</span> :  
                            <button type="button" className="btn btn-outline-success mr-2" onClick={() => {
                                this.login = true
                            }}>Login</button>} */}

                            {this.renderLogin()}




                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
