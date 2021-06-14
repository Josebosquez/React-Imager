import React, { Component } from 'react'
import './Thumbnail.css'

export class Thumbnail extends Component {
    constructor (props) {
        super (props);


        this.state = {

        }
    }

    handleOnClick = (item) => {
        console.log('clicked')
    }


    render() {

        // console.log(this.props) // this will log out the key that we are passing through (img).
        return (
            <div>

                <div className="thumbnails">
                    {this.props.img.map((item) => {
                        return <img className="img" onClick={this.handleOnClick} src ={item}  /> 
                    })
                } 
                </div>

            </div>
        )
    } // they key word img is being used for our array map method as it is coming from the parent.
}

export default Thumbnail
