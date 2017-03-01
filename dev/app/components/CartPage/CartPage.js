import React from 'react';
import CartContainer from '../Cart/CartContainer';

export default class CartPage extends React.Component {
  render() {
    return (
        <div className="cart-page">
          <h1>Корзина</h1>
          <CartContainer />
        </div>
    );
  }
}

/*import React, {Component, PropTypes} from 'react';
import "./../../blocks/info-links/info-links.less";

export class InfoLinks extends Component {
    constructor(props){
        super(props);
        this.state = { isOpened: false };
        this.toggleState = this.toggleState.bind(this);
    }
    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        let openModifier = this.state.isOpened ? ' info-links__list_visible' : '';
        return (
            <div className="info-links">
                <a className="info-links__mobile-btn" onClick={this.toggleState}></a>
                <ul className={'info-links__list'  + openModifier} >
                    {this.props.items.map((item, index) => {
                        return (
                            <li className="info-links__item" key={index}>
                                <a href={item.link} className="info-links__link link link_decoration_none header__link">
                                    {item.name}
                                </a>
                            </li>)
                    })}
                </ul>
            </div>
        );
    }
}

InfoLinks.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            link: PropTypes.string
        })
    )
};*/
