import React from 'react';
import { withKnobs, text} from "@storybook/addon-knobs";
import Button from '../components/Button.js';
import "../components/css/button.css";

export default {
  title: 'Button',
  decorators: [withKnobs]
};


export const standard = () => (
  <Button label={text("Label", "Primary Action")} type="standard"/>
 );

export const small = () => (
  <Button label={text("Label", "Primary Action")} type="sm"/>
 );

export const secondary = () => (
  <Button label={text("Label", "Secondary Action")} type="secondary"/>
 );