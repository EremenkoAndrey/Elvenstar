import { connect } from 'react-redux';
import Cart from './Cart';
import {deleteItemFromCart} from './../../actions/index';

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id)=>{
            dispatch(deleteItemFromCart(id));
        }
    }
};

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default CartContainer;
