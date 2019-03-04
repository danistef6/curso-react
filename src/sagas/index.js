import { takeLatest } from 'redux-saga/effects'
import {fetchCharecterSaga } from './characterSagas'
import { CHARACTERS_REQUEST } from '../types/character'

export default  function* rootSaga() {
    yield takeLatest(CHARACTERS_REQUEST, fetchCharecterSaga)

}