import React, { Component } from "react";




class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
      color: "red",
    }

    handleClick() {
        console.log("button clicked!");
        console.log(this);

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let randomColor = `rgb(${r},${g},${b})`;
        this.setState({color : randomColor});
    }
  
  render() {
    return (
        <div className="buttons">
      
            <button className="button"              
                id={this.props.id}
                style={{backgroundColor : this.state.color}}
                onClick={() => this.handleClick()} > 
                    Click Me
            </button>
      
         </div>
    );
  }
}

export default Button;