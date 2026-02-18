import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

// redux stuff
import { useDispatch, useSelector } from "react-redux"

import { isCompanyInFavourites } from "../assets/js/helpers"

const Job = (props) => {
  const dispatch = useDispatch()
  const favouriteCompanies = useSelector((state) => state.favouriteCompanies)

  return (
    <>
      <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
        <Col xs={3}>
          <Link to={`/${props.job.company_name}`}>{props.job.company_name}</Link>
        </Col>
        <Col xs={9}>
          <a href={props.job.url} target="_blank" rel="noreferrer">
            {props.job.title}
          </a>
        </Col>
      </Row>
      <Row className="mx-0 p-1" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
        <Col className="mt">
          {/* company is in favourites */}
          {isCompanyInFavourites({ favouriteCompanies })(props.job) && <p>already in favourites</p>}

          {/* not: company is in favourites */}
          {!isCompanyInFavourites({ favouriteCompanies })(props.job) && (
            <Button
              className="info"
              onClick={() => {
                // check again that the company is not in favourites.
                // prevents discrepancy between UI and source of truth
                if (isCompanyInFavourites({ favouriteCompanies })(props.job)) {
                  return
                }
                dispatch({
                  type: "ADD_COMPANY_TO_FAVOURITE_COMPANIES",
                  payload: props.job,
                })
              }}
            >
              {" "}
              + favourite
            </Button>
          )}
        </Col>
      </Row>
    </>
  )
}

export default Job
