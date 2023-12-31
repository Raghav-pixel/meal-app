export const cartReducer = (state, action) => {
    console.log(state, '[state][reducer]');
    switch(action.type) {
        case 'ADD_TO_CART':
            return [ ...state, { ...action.payload, qty: 1 } ];
        case 'REMOVE_FROM_CART':
            return state.filter((c) => c.title !== action.payload.title);
        default:
            return state;
    }
}