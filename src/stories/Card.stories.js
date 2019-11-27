import React from 'react';
import { withKnobs, text} from "@storybook/addon-knobs";
import Card from '../components/Card.js';
import "../components/css/card.css";

export default {
  title: 'Card',
  decorators: [withKnobs]
};


export const Media = () => ( <Card
                  image={text("Image URL", "https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=vU0J0uZR")}
                  title ={text("Title", "The seed of Intelligence?")}
                  text ={text("Text", "Explorations of brilliant syntheses consciousness Orion's sword preserve and cherish that pale blue dot globular star ")}
                  button1={text("Button 1", "Primary Action")}
                  button2={text("Button 2", "Secondary Action")}
                  /> );
