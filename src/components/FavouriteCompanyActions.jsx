import AddCompanyToFavourites from "./AddCompanyToFavourites"
import RemoveCompanyFromFavourites from "./RemoveCompanyFromFavourites"

const FavouriteCompanyActions = ({ company, favouriteCompanies }) => {
  return (
    <>
      {/* ADD */}
      <AddCompanyToFavourites company={company} favouriteCompanies={favouriteCompanies} />

      {/* REMOVE */}
      <RemoveCompanyFromFavourites company={company} favouriteCompanies={favouriteCompanies} />
    </>
  )
}

export default FavouriteCompanyActions
