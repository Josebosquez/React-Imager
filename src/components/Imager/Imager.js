import React, { Component } from 'react'
import Thumbnails from '../Thumbnail/Thumbnail'
import Display from '../Display/Display'

import "./Imager.css"
// import "../Thumbnail/Thumbnail.css"
// import "../Display/Display.css"

export class Imager extends Component {
    constructor(props) {
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
            bigImage: "",
            index: ''
        };
    }

    componentDidMount() {
        let randomNum = Math.floor(Math.random() * this.state.img.length)
        this.setState({
            bigImage: this.state.img[randomNum],
            index: randomNum
        })
    }

    handleRandomClick = () => {
        // console.log('random button clicked')
        let randomNum = Math.floor((Math.random()) * this.state.img.length)
        console.log(randomNum)

        this.setState({
            bigImage: this.state.img[randomNum]
        })
    }

    handleLeftButton = () => {
        // console.log('left button clicked')
        console.log(this.state.index);
        if (this.state.index === 0) {
            this.setState({
                bigImage: this.state.img[this.state.img.length - 1],
                index: this.state.img.length - 1
            })
        } else {
            this.setState({
                bigImage: this.state.img[this.state.index - 1],
                index: this.state.index - 1,
            })
        }
    }

    handleRightButton = () => {
        // console.log('right button clicked')
        console.log(this.state.index);

        if (this.state.index === 11) {
            this.setState({
                bigImage: this.state.img[0],
                index: 0,
            });
        } else {
            this.setState({
                bigImage: this.state.img[this.state.index + 1],
                index: this.state.index + 1,
            });
        }
    };

    render() {
        // console.log(this.props) // returns as an object
        return (
            <div>

                <Display
                    bigImage={this.state.bigImage}
                    handleRandomClick={this.handleRandomClick} // pushes the function to the display child
                    img={this.state.img} // push img array to display child.
                />

                <div>

                    <div className="buttons">
                        <button className='random' onClick={this.handleRandomClick} >Random</button>
                        <div className="arrows">
                            <button className='left-arrow'
                                onClick={this.handleLeftButton} >
                                {'<'}
                            </button>
                            <button className='right-arrow'
                                onClick={this.handleRightButton}>
                                {'>'}
                            </button>
                        </div>
                    </div>

                    <Thumbnails
                        img={this.state.img} 
                        Thumbnails={this.handleThumbNail}// thumbnail child will be passed down the key img. This will allow the thumbnail.js to use the word img when mapping through our array.
                    />
                </div>
            </div>
        )
    }
}

export default Imager
