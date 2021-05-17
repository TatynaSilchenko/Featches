export type loadingType={
    type:'LOADING',
    loading:boolean
}
type ActionsType=loadingType;

const initState = {
loading: false
};

export const loadingReducer = (state = initState, action: ActionsType): any => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state,loading:action.loading};
        }
        default: return state;
    }
};

export const loadingAC = (loading:boolean): loadingType => {
    return {type:'LOADING',loading}}; // fix any