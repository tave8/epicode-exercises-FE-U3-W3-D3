const initialState = {
  favouriteCompanies: {
    list: [],
  },
}

const mainReducer = (currState = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPANY_TO_FAVOURITE_COMPANIES":
      // console.log(action)
      return {
        ...currState,
        favouriteCompanies: {
          ...currState.favouriteCompanies,
          list: [...currState.favouriteCompanies.list, action.payload],
        },
      }
    default:
      return currState
  }
}

export default mainReducer
