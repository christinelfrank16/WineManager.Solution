import constants from './../constants';
const { c } = constants;

export default (state = [], action) => {
    let newState;

    switch(action.type){
        case c.ADD_LOCATION:
            newState = state.slice().push(action.newLocation);
            return newState;
        
        default:
            return state;
    }
}