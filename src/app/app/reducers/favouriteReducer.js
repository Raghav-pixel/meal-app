export const favouriteReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_FAVOURITE':
            return [ ...state, { ...action.payload, qty: 1 } ];
        case 'REMOVE_FROM_FAVOURITE':
            return state.filter((c) => c.title !== action.payload.title);
        default:
            return state;
    }
}