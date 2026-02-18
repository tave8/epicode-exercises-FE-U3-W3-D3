import { useDispatch } from "react-redux"
import { Button } from "react-bootstrap"


const RemoveCompanyFromFavourites = ({ company }) => {
  const dispatch = useDispatch()

  return (
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
  )
}

export default RemoveCompanyFromFavourites
