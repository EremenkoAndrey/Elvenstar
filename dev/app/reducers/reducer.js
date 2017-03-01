let initialState = {
    cart: {
        items: [
            {
                id: 226,
                title: 'Подвеска "Орда"',
                link: '/catalog/item/pendant-the-horde/',
                image: '/upload/resize_cache/iblock/3a2/110_110_1/3a2a6fc08f3cac62bad5a780798a4bc5.jpg',
                count: 1,
                max: 10,
                price: 390,
                props: {}
            },
            {
                id: 225,
                title: 'Подвеска "Орда"',
                link: '/catalog/item/pendant-the-horde/',
                image: '/upload/resize_cache/iblock/3a2/110_110_1/3a2a6fc08f3cac62bad5a780798a4bc5.jpg',
                count: 1,
                max: 10,
                price: 390,
                props: {}
            }
        ]
    }
};

const deleteItem = (items, id)=>{
    let result = items.filter((item)=>{
        return item.id !== id;
    });
    return result || [];
};

export const reducer = (state, action) => {
    console.log('root reducer', state);

    switch (action.type) {
        case ('DELETE_ITEM_FROM_CART'):
            let res = Object.assign({}, state, {
                cart: {
                    items: deleteItem(state.cart.items, action.id)
                }
            });
            console.log('res ', res);
            return res;
            break;

        default:
            return initialState;
    }
};
