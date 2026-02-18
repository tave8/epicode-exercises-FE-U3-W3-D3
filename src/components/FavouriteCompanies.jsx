import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"

// redux stuff
import { useDispatch, useSelector } from "react-redux"

const FavouriteCompanies = () => {
  const favouriteCompanies = useSelector((state) => state.favouriteCompanies)
  const dispatch = useDispatch()

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Link to="/">Home</Link>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h2>Favourite Companies</h2>
        </Col>
      </Row>
      <Row className="mt-3 g-3">
        {/* exist favourite companies */}
        {favouriteCompanies.list.length > 0 &&
          favouriteCompanies.list.map((company, i) => {
            return (
              <Row key={`${company._id}-${i}`} className="border p-2">
                <Col xs={12}>
                  <p>
                    <Link to={`/${company.company_name}`}>
                      {company.company_name} - {company.title}
                    </Link>
                  </p>
                </Col>
                <Col xs={12}>
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
                </Col>
              </Row>
            )
          })}

        {/* no favourite companies */}
        {favouriteCompanies.list.length == 0 && <p>No favourite companies yet</p>}
      </Row>
    </Container>
  )
}

export default FavouriteCompanies
