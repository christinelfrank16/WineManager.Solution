import constants from './../constants';
const { c } = constants;

export default (state = [], action) => {
    let newState;

    switch(action.type){
        case c.ADD_LOCATION:
            console.log(state, action.newLocation);
            newState = state.slice();
            newState.push(action.newLocation);
            console.log(newState);
            return newState;

        case c.GET_LOCATIONS:
            newState = action.jsonLocationData;
            return newState;
        
        default:
            return state;
    }
}