import {SET_LIKES,
        RESET_LIKES,
        CHARACTERS_REQUEST,
        CHARACTERS_SUCCESS,
        CHARACTERS_ERROR} from '../types/character'

export const fetchCharacterSaga = () => ({
    type: CHARACTERS_REQUEST,
})

export const fetchedCharacterSuccess = payload => ({
    type: CHARACTERS_SUCCESS,
    payload,
})

export const fetchedCharacterError = payload => ({
    type: CHARACTERS_ERROR,
    payload,
})

export const setLikes = payload => ({
    type: SET_LIKES,
    payload,
})

export const resetLikes = payload => ({
    type: RESET_LIKES,
    payload,
})

export const increaseLikes = () => (dispatch , getState ) => {
    const { likes } = getState().character
    const  totalLikes = likes + 1
    dispatch(setLikes(totalLikes))
}

export const decreaseLikes = () => (dispatch , getState ) => {
    const { likes } = getState().character
    const  totalLikes = likes - 1
    dispatch(setLikes(totalLikes))
}

export const restartLikes = () => (dispatch  ) => {
    const  totalLikes = 0
    dispatch(resetLikes(totalLikes))
}