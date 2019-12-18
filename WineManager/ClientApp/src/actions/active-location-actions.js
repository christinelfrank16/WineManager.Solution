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

export function addWine(wineData, slotLocation, locationId){
    return async(dispatch) => {
        const wineUrl = `api/wine`;
        const response = await fetch(wineUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wineData)
        });
        console.log(await response);
        const newWine = await response.json();
        addSlot(newWine.WineId, slotLocation, locationId);
    }
}

export function addSlot(wineId, slotLocation, locationId){
    return async(dispatch) => {
        const slotUrl = `api/slots`;
        const slotData = {
            SlotPosition: slotLocation,
            WineId: wineId,
            LocationId: locationId
        };
        const slotResponse = await fetch(slotUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(slotData)
        });
        const newSlot = await slotResponse.json();
        dispatch({type: types.ADD_SLOT, newSlot })
    }
}