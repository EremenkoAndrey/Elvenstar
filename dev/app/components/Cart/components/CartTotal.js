import React from 'react';
import {MESS_TOTAL} from '../../lang'

const Total = (props) => {
    return (
        <div className="big-cart__summ">
            {MESS_TOTAL} <span className="price price_bold price_big big-cart__itog">5000</span>
        </div>
    );
};
export default Total;