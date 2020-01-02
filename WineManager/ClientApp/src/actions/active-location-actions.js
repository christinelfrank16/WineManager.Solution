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
        const url = `api/wine`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(wineData)
        });
        const newWineItem = await response.json();
        dispatch(addSlot(newWineItem.wineItemId, slotLocation, locationId));
    }
}

// test api call to wine db
export function getWine(){
    return async() => {
        const url = `api/wine`;
        const response = await fetch(url);
        const wineList = response.json();
        return wineList;
    }
}

export function addSlot(wineId, slotLocation, locationId){
    return async(dispatch) => {
        const url = `api/slots`;
        const slotData = {
            Position: slotLocation,
            WineItemId: wineId,
            LocationId: locationId
        };
        const slotResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(slotData)
        });
        const newSlotItem = await slotResponse.json();
        dispatch({ type: types.ADD_SLOT, newSlotItem })
    }
}