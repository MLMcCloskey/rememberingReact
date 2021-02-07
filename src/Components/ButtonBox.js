import React, { Component } from "react";
import Button from './Button'



class ButtonBox extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("button clicked!");
        console.log(this);

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let randomColor = `rgb(${r},${g},${b})`;
        this.setState({ color: randomColor });
    }

    render() {
        return (
            <div id="buttons">
                {this.props.buttons.map(button => {
                    return <Button 
                                id={button.id} 
                                style={{backgroundColor : button.color}} 
                                onClick={() => this.handleClick()} >
                                    Click Me
                            </Button>
                })}
            </div>
        );
    }
}

export default ButtonBox;