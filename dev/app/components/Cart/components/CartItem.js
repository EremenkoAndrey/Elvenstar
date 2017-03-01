import React from 'react';

const CartItem = ({image, title, link, price, onDelete}) => {
    return (
        <div className="big-cart__row">
            <div className="big-cart__item big-cart__item_name">
                <div className="big-cart__image">
                    <img className="photo" src={ image } alt={ title } />
                </div>
                <a className="big-cart__name link" href={ link }>{ title }</a>
            </div>

            <div className="big-cart__item big-cart__item_count">
                <product-count className="big-cart__count"></product-count>
            </div>

            <div className="big-cart__item big-cart__item_price">
                <div className="price big-cart__price">{ price }</div>
            </div>

            <div className="big-cart__item big-cart__item_actions">
                <a href="#" className="big-cart__delete" onClick={(e)=>{
                    e.preventDefault();
                    onDelete();
                }}></a>
            </div>
        </div>
    );
};

export default CartItem;
