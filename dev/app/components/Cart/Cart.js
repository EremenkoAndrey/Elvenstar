import React from 'react';
import CartItem from './components/CartItem'
import {MESS_GOODS, MESS_QUANTITY, MESS_PRICE} from '../lang';
import "./cart.less";

import Total from './components/CartTotal';

const Cart = ({cart, deleteItem}) => {
    console.log('cart props', cart);
    return (
        <section className="big-cart">
            <div className="big-cart__row big-cart__row_titles">
                <div className="big-cart__item big-cart__item_name">{ MESS_GOODS }</div>
                <div className="big-cart__item big-cart__item_count">{ MESS_QUANTITY }</div>
                <div className="big-cart__item big-cart__item_price">{ MESS_PRICE }</div>
                <div className="big-cart__item big-cart__item_actions"></div>
            </div>
            {cart.items.map((item)=>{
                return <CartItem {...item} key={item.id} onDelete={()=>deleteItem(item.id)} />
            })}
            <Total />
        </section>

    );
};


export default Cart;

/*import React from 'react';

export class Autorization extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
        console.time('timerName');
        fetch('/bitrix/templates/elvenstar/components/bitrix/system.auth.form/auth-form/ajax.php', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'AJAX_CALL=true'
        })
            .then((response)=>{
                return response.text().then((text)=>{
                    this.setState({ text: 'Личный кабинет' });
                    console.timeEnd('timerName');
                    console.log('response', text);
                })
            }).then((json)=>{
            console.log('parsed json', json)
        }).catch((ex)=> {
            console.log('parsing failed', ex)
        })

    }

    render() {
        return <div>{this.state.text}</div>;
    }
}*/
