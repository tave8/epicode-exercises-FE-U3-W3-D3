import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"

import { isCompanyInFavourites } from "../assets/js/helpers"


const AddCompanyToFavourites = ({ company, favouriteCompanies }) => {
  const dispatch = useDispatch()

  return (
    <Button
      className="info"
      onClick={() => {
        // check again that the company is not in favourites.
        // prevents discrepancy between UI and source of truth
        if (isCompanyInFavourites({ favouriteCompanies })(company)) {
          return
        }
        dispatch({
          type: "ADD_COMPANY_TO_FAVOURITE_COMPANIES",
          payload: company,
        })
      }}
    >
      {" "}
      + favourite
    </Button>
  )
}


export default AddCompanyToFavourites