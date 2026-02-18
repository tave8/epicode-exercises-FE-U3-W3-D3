const initialState = {
  favouriteCompanies: {
    list: [],
  },
}

const mainReducer = (currState = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPANY_TO_FAVOURITE_COMPANIES":
      return {
        ...currState,
        favouriteCompanies: {
          ...currState.favouriteCompanies,
          list: [...currState.favouriteCompanies.list, action.payload],
        },
      }
    case "REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES":
      return {
        ...currState,
        favouriteCompanies: {
          ...currState.favouriteCompanies,
          list: currState.favouriteCompanies.list.filter((company) => company._id != action.payload._id),
        },
      }
    default:
      return currState
  }
}

export default mainReducer
