import { Link } from "react-router-dom"
import { Container, Row, Col, Form } from "react-bootstrap"

// redux stuff
import { useSelector } from "react-redux"

const FavouriteCompanies = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Link to="/">Home</Link>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  )
}

export default FavouriteCompanies
