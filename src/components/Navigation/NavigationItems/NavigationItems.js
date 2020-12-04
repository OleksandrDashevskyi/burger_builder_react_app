import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { VscAccount } from "react-icons/vsc";

const NavigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link='/' exact>BurgerBuilder</NavigationItem>
    <NavigationItem link='/orders'>Orders</NavigationItem>
    <NavigationItem link='/auth'><VscAccount /></NavigationItem>
  </ul>
);

export default NavigationItems;
