import * as types from "../constants/actionTypes";

export function getLocationById(id){
    return async(dispatch) => {
        const url = `api/locations/${id}`;
        return fetch(url).then(
            response => response.json(),
            error => console.log(error)
        ).then(function (jsonLocationData){
            console.log(jsonLocationData);
            if(jsonLocationData){
                dispatch({type: types.GET_LOCATIONDATA, jsonLocationData});
            } else {
                console.log("No slots found");
            }
        })
    }
}

export function addWine(wineData, slotLocation){
    return async(dispatch) => {
        const wineUrl = `api/wine`;
        const wineResponse = await fetch(wineUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(wineData)
        });
        const newWine = await wineResponse.json();
        const slotUrl = ``
        dispatch({type: types.ADD_SLOT, newWine })
    }
}