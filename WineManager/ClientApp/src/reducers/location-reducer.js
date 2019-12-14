import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
    let newState;
    const { id, name, xDim, yDim } = action;

    switch(action.type){
        case c.ADD_LOCATION:
            newState = Object.assign({}, state, {
                [id]: {
                    name: name,
                    xSlotCount: xDim,
                    ySlotCount: yDim
                }
            });
            return newState;
        
        default:
            return state;
    }
}