import AddCompanyToFavourites from "./AddCompanyToFavourites"
import RemoveCompanyFromFavourites from "./RemoveCompanyFromFavourites"

const defaultShowOptions = {
  add: true,
  remove: true,
}

/**
 * props: {
 *    company: obj
 *    favouriteCompanies: <as defined in redux store>
 *    showOptions: {
 *      add: bool, default: true
 *      remove: bool, default: true
 *    }
 * }
 */

const FavouriteCompanyActions = ({ company, favouriteCompanies, showOptions = {} }) => {
  const finalShowOptions = { ...defaultShowOptions, ...showOptions }
  return (
    <>
      {/* ADD */}
      {finalShowOptions.add && <AddCompanyToFavourites company={company} favouriteCompanies={favouriteCompanies} />}

      {/* REMOVE */}
      {finalShowOptions.remove && <RemoveCompanyFromFavourites company={company} favouriteCompanies={favouriteCompanies} />}
    </>
  )
}

export default FavouriteCompanyActions
