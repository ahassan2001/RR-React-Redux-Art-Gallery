import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    objectId: 436947,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
        reducers: {
            setApiData: (state, action) => {
                return { ...state, apiData: action.payload }
        },
            incrementIdOne: state => {
                return { ...state, objectId: state.objectId + 1 }
        },
            decrementIdOne: state => {
                return { ...state, objectId: state.objectId - 1 }
        },
            customIdInput: (state, action) => {
                return { ...state, objectId: action.payload }
        },
            resetState: () => {
                return initialState 
        }
    }
})

export const { setApiData, incrementIdOne, decrementIdOne, customIdInput, resetState } = dataSlice.actions

export const fetchData = () => {
    const artThunk = async (dispatch, getState) => {
        let state = getState();
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const resData = await response.json();
        dispatch(setApiData(resData))
    }
    return artThunk
}

export default dataSlice.reducer;