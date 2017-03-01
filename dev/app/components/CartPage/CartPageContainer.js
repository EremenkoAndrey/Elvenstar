import { connect } from 'react-redux';
import CartPage from './CartPage';

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const CartPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage);

export default CartPageContainer;
