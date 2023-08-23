//rcc
import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTContentComponent from './BTContentComponent'
import BTNavComponent from './BTNavComponent'
import BTFooter from './BTFooter'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
                <BTHeader />
                <div className="d-flex  ">
                    <div className="w-25">
                        <BTNavComponent />
                    </div>
                    <div className="w-75">
                        <BTContentComponent />
                    </div>
                </div>
                <BTFooter/>

            </div>
        )
    }
}
