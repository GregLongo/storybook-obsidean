import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  handleClick (){
    console.log("igotclicked");
  }

  render() {
    return (
      <button className={ "button button" + ( ("-" + this.props.type) || "") }  onClick="handleClick">{this.props.label}</button>
    );
  }
}

export default Button;