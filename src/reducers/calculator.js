import * as actionTypes from '../utils/actionsTypes';

const initialAppState = {
    inputValue: 0,
    keta: 0,
    // resultValue: 0,
    showingResult: false,
    popout: false,
    popout_error: false,
};

const calculator = (state = initialAppState, action)=>{
    if(action.type === actionTypes.INPUT_NUMBER){
        if( state.keta === 6){
            return{
                ...state,
                inputValue: state.inputValue,
                showingResult: false,
                keta: state.keta,
                popout: false,
                popout_error: true,
            };
        }
        return {
            ...state,
            inputValue: state.inputValue * 10 + action.number,
            showingResult: false,
            keta: state.keta + 1,
            popout: false,
        };
    }else if(action.type === actionTypes.PLUS){
        return{
            ...state,
            inputValue: state.inputValue,
            // resultValue: state.resultValue + state.inputValue,
            // resultValue: state.inputValue,
            // showingResult: true,
            popout: !state.popout,
        };
    }else if(action.type === actionTypes.CLOSEERROR){
        return{
            ...state,
            // inputValue: state.inputValue,
            // resultValue: state.resultValue + state.inputValue,
            // resultValue: state.inputValue,
            // showingResult: true,
            popout_error: !state.popout_error,
        };
    }else{
        return state;
    }
};

export default calculator;