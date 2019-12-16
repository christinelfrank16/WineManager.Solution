import constants from '../constants';
const { c } = constants;

export default (state = {}, action) => {
    let newState;

    switch(action.type){
        case c.ADD_SLOT:
            newState = state.slice();
            newState.push(action.newLocation);
            return newState;

        case c.GET_LOCATIONDATA:
            newState = action.jsonLocationData;
            return newState;
        
        default:
            return state;
    }
}