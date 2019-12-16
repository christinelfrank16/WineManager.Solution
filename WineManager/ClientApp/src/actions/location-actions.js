import * as types from "../constants/actionTypes";

export function addLocation(locationData) {
    return async(dispatch) => {
        const url = `api/locations`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(locationData)
        });
        const newLocation = await response.json();
        dispatch({type: types.ADD_LOCATION, newLocation })
    }
}

export function getLocations(){
    return async(dispatch) => {
        const url = `api/locations`;
        return fetch(url).then(
            response => response.json(),
            error => console.log(error)
        ).then(function (jsonLocationData){
            console.log(jsonLocationData);
            if(jsonLocationData){
                dispatch({type: types.GET_LOCATIONS, jsonLocationData});
            } else {
                console.log("No locations found");
            }
        })
    }
}