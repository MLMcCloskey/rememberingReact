import React from "react";
import Button from './Button'



const ButtonBox = () => {

        let buttons = [{id: 1, color:"red"}, {id: 2, color: "green"}, {id: 3, color: "blue"}, {id: 4, color: "yellow"}, {id: 5, color: "purple"}]
        return (
            <div id="buttons">
                {buttons.map(button => {
                    return <Button 
                                id={button.id} 
                                style={{backgroundColor : button.color}} 
                                >
                                    Click Me
                            </Button>
                })}
            </div>
        );
    }


export default ButtonBox;