import React, { Component } from 'react'
import "./Display.css"

export class Display extends Component {
    constructor (props) {
        super (props);


        this.state = {

        }
    }

    handleRandomImgAssignment = () => {
        
    }

    render() {
        return (
            <div>
                <h1 className="title">Imager</h1>
                <div className="box">
                    <img className="top-Img" src={this.props}/>
                </div>
            </div>
        )
    }
}

export default Display
