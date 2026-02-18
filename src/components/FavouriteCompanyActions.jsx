import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"

import AddCompanyToFavourites from "./AddCompanyToFavourites"

const FavouriteCompanyActions = ({ company, favouriteCompanies }) => {
  const dispatch = useDispatch()

  return (
    <>
      {/* ADD */}
      <AddCompanyToFavourites company={company} favouriteCompanies={favouriteCompanies} />

      {/* REMOVE */}
      <Button
        onClick={() => {
          dispatch({
            type: "REMOVE_COMPANY_FROM_FAVOURITE_COMPANIES",
            payload: company,
          })
        }}
        variant="danger"
      >
        remove from favourites
      </Button>
    </>
  )
}

export default FavouriteCompanyActions
