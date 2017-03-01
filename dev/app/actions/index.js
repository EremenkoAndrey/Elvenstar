export const deleteItemFromCart = (id) => {
    console.log('deleteItemFromCart', id);
    return {
        type: 'DELETE_ITEM_FROM_CART',
        id: id
    }
};
