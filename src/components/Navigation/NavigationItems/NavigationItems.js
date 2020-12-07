import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem link='/' exact>BurgerBuilder</NavigationItem>
    <NavigationItem link='/orders'>Orders</NavigationItem>
    {!props.isAuthenticated
      ? <NavigationItem link='/auth'>Login</NavigationItem>
      : <NavigationItem link='/logout'>Logout</NavigationItem>}
  </ul>
);

export default NavigationItems;
