import AddCompanyToFavourites from "./AddCompanyToFavourites"
import RemoveCompanyFromFavourites from "./RemoveCompanyFromFavourites"

import { isCompanyInFavourites } from "../assets/js/helpers"

const defaultShowOptions = {
  add: true,
  remove: true,
  dependsIfCompanyInFavourites: false,
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
      {/* show "add to favourites" and/or "remove from favourites" as you want */}
      {!finalShowOptions.dependsIfCompanyInFavourites && (
        <>
          {/* ADD */}
          {finalShowOptions.add && <AddCompanyToFavourites company={company} favouriteCompanies={favouriteCompanies} />}

          {/* REMOVE */}
          {finalShowOptions.remove && <RemoveCompanyFromFavourites company={company} favouriteCompanies={favouriteCompanies} />}
        </>
      )}

      {/* if the company is in favourites: show "add to favourite", else show "remove from favourites" */}
      {finalShowOptions.dependsIfCompanyInFavourites && (
        <>
          {isCompanyInFavourites({ favouriteCompanies })(company) && <RemoveCompanyFromFavourites company={company} favouriteCompanies={favouriteCompanies} />}
          {!isCompanyInFavourites({ favouriteCompanies })(company) && <AddCompanyToFavourites company={company} favouriteCompanies={favouriteCompanies} />}
        </>
      )}
    </>
  )
}

export default FavouriteCompanyActions
