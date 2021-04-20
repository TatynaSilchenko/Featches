export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = state;
            return newState.sort((a: any, b: any) => {
                    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.name.toUpperCase();

                    if (nameA < nameB) {
                        return action.payload === 'up' ? -1 : 1;
                    }
                    if (nameA > nameB) {
                        return action.payload === 'up' ? 1 : -1;
                    }
                    // names must be equal
                    return 0;
                }
            )
        }
        case 'check': {
            return state.filter((u: any) => u.age >= action.payload)
        }
        default:
            return state
    }
}