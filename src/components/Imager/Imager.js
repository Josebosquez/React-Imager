import React, { Component } from 'react'
import Thumbnails from '../Thumbnail/Thumbnail'
import Display from '../Display/Display'

import "./Imager.css"
// import "../Thumbnail/Thumbnail.css"
// import "../Display/Display.css"

export class Imager extends Component {
    constructor (props){
        super(props)  
        // console.log(this)
        // console.log(this.props)

    this.state = {
        img: [
            './images/img1.jpeg',
            './images/img2.jpeg',
            './images/img3.jpeg',
            './images/img4.jpeg',
            './images/img5.jpeg',
            './images/img6.jpeg',
            './images/img7.jpeg',
            './images/img8.jpeg',
            './images/img9.jpeg',
            './images/img10.jpeg',
            './images/img11.jpeg',
            './images/img12.jpeg',
        ],
    };
    }

    handleRandomClick = () => {
        console.log('click')
        let randomNum = Math.floor((Math.random()) * 12 )+1
        console.log(randomNum)
        return randomNum
    }

    render() {
        // console.log(this.props) // returns as an object
        return (
            <div>

                <Display
                handleRandomClick={this.handleRandomClick} // pushes the function to the display child
                img = {this.state.img} // push img array to display child.
                />

                <div>
                    
                <div className="buttons">
                    <button className='random' onClick={this.handleRandomClick} >Random</button>
                    <div className="arrows"> 
                        <button className='left-arrow'> {'<'} </button>
                        <button className='right-arrow'> {'>'} </button>
                    </div>
                </div>
                
                <Thumbnails 
                    img = {this.state.img} // thumbnail child will be passed down the key img. This will allow the thumbnail.js to use the word img when mapping through our array.
                /> 

                </div>


            </div>
        )
    }
}

export default Imager
