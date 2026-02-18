import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

// redux stuff
import { useDispatch } from "react-redux"

const Job = (props) => {
  const dispatch = useDispatch()

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
          <Button
            className="info"
            onClick={() => {
              dispatch({
                type: "ADD_COMPANY_TO_FAVOURITE_COMPANIES",
                payload: props.job
              })
            }}
          >
            {" "}
            + favourite
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Job
