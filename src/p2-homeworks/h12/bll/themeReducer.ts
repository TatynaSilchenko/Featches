export type ChangeThemeType={
    type:'CHANGE-THEME',
    theme:string
}

type ActionType=ChangeThemeType

const initState = {
theme:'some'
};

export const themeReducer = (state = initState, action: ActionType): any => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state,theme:action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme:string): ChangeThemeType =>{
    return {type:'CHANGE-THEME',theme};}  // fix any