import React from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import OrderInPrint from './OrderInPrint';

const OrderComponent = ({ handleOpen }) => {
  // Use Array.from to create an array with a length of 3
  const orderInPrintArray = Array.from({ length: 3 }, (value, index) => (
    <OrderInPrint key={index} />
  ));

  return (
    <div className="flex flex-col sm:pb-0 md:px-12 md:pt-4 md:-pb-8">
      <div className="block fixed z-[10001] top-7 left-4 md:hidden" onClick={handleOpen}>
        <FaBarsStaggered />
      </div>

      {orderInPrintArray}
    </div>
  );
};

export default OrderComponent;