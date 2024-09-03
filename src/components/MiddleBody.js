import React from 'react';
import Carousel from './Carousel';
import HeaderItemCard from './HeaderItemCard';
import Notification from './Notification';

const MiddleBody = () => {
 
const menuItems = ['Sport','Health','Political','Business','Finance','Life','Entertainment']
  return (
    <div>
        <Carousel />
        {menuItems.map((itemName,index) => (<HeaderItemCard heading={itemName} key={index} />))}
        <Notification />
    </div>
  );
};

export default MiddleBody;
