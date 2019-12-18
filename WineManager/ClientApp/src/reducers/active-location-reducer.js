import constants from '../constants';
const { c } = constants;

export default (state = {}, action) => {
    let newState;

    switch(action.type){
        case c.ADD_SLOT:
            console.log(action);
            let newSlotsArray = state.slots.slice();
            newSlotsArray.push(action.newSlotItem);
            newState = Object.assign({}, state, {
                slots: newSlotsArray
            });
            return newState;

        case c.GET_LOCATIONDATA:
            newState = action.jsonLocationData;
            return newState;
        
        default:
            return state;
    }
}