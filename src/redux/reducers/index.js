
const initialState = {
    favouriteCompanies: {
        list: []
    }
}

const mainReducer = (currentState = initialState, action) => {
    switch(action.type) {
        case "ADD_COMPANY_TO_FAVOURITE_COMPANIES":
            console.log(action)
            return currentState
        default:
            return currentState
    }
}


export default mainReducer