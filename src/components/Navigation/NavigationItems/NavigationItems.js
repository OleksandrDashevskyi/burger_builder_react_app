import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link='/' exact>BurgerBuilder</NavigationItem>
    <NavigationItem link='/orders'>Orders</NavigationItem>
    <NavigationItem link='/auth'>Authenticate</NavigationItem>
  </ul>
);

export default NavigationItems;
