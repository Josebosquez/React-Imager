import React, { Component } from 'react'
import './Thumbnail.css'

export class Thumbnail extends Component {

    handleThumbNail = (item, index) => {
        console.log('thumbnail clicked')
        console.log(item);
        
        this.setState({
            bigImage: item.target.src,
            index: index,
        });
    };


    render() {
        // console.log(this.props) // this will log out the key that we are passing through (img).
        return (
            <div>

                <div className="thumbnails">
                    {this.props.img.map((item, key) => {
                        return <img
                            className="img"
                            onClick={this.handleThumbNail}
                            src={item}
                            item={item}
                            key={item}
                            alt={this.props.img} />
                    })
                    }
                </div>

            </div>
        )
    } // the key word img is being used for our array map method as it is coming from the parent.
}

export default Thumbnail
