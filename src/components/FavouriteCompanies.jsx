import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

// redux stuff
import { useSelector } from "react-redux"

const FavouriteCompanies = () => {
  const favouriteCompanies = useSelector((state) => state.favouriteCompanies)

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Link to="/">Home</Link>
        </Col>
      </Row>
      <Row>
        {/* exist favourite companies */}
        {favouriteCompanies.list.length > 0 &&
          favouriteCompanies.list.map((company, i) => {
            return (
              <Col key={`${company._id}-${i}`} xs={12}>
                <p>
                  <Link to={`/${company.company_name}`}>{company.company_name}</Link>
                </p>
              </Col>
            )
          })}

        {/* no favourite companies */}
        {favouriteCompanies.list.length == 0 && <p>No favourite companies yet</p>}
      </Row>
    </Container>
  )
}

export default FavouriteCompanies
