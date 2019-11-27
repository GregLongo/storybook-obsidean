import React from 'react';
import { withKnobs, text} from "@storybook/addon-knobs";
import LeftNav from '../components/LeftNav.js';
import "../components/css/leftnav.css";

export default {
  title: 'Left Nav',
  decorators: [withKnobs]
};


export const WithIcons = () => (
   <LeftNav icons />
 );

export const NoIcons = () => (
  <LeftNav />
 );

export const Minimized = () => (
  <LeftNav icons minimized />
 );
