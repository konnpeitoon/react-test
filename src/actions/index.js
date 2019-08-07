import * as actionTypes from '../utils/actionsTypes'

export const onNumClick = (number) => ({
    type: actionTypes.INPUT_NUMBER,
    number,
});

export const onPlusClick = () => ({
    type: actionTypes.PLUS,
});

export const onCloseError = () => ({
    type: actionTypes.CLOSEERROR,
})