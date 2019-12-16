import * as types from "../constants/actionTypes";

export function addLocation(locationData) {
    return async(dispatch) => {
        console.log(locationData);
        const url = `api/locations`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(locationData)
        });
        console.log(response);
        const newLocation = await response.json();
        console.log(newLocation);
        dispatch({type: types.ADD_LOCATION, newLocation })
    }
}