import React, { Component } from 'react';
import Button from '../components/Button.js';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" > 
        <div className="card-image-container">
            <img src ={this.props.image}/>
        </div>
        <div className="card-text-container">
          <h3> {this.props.title}</h3>
          <p>{this.props.text}</p>
          </div>
        <div className="card-action-container">
          <Button type="sm" label={this.props.button1} />
          <Button type="secondary" label={this.props.button2} />
        </div>
        <div className="card-image-container card-image-container-bg">
            <img src ={this.props.image}/>
        </div>
          
      </div>
    );
  }
}

export default Card;