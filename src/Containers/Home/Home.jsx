import './home.scss'
import { Row,Col } from 'react-bootstrap'

const Home = () => {

    return (
        <Row className="home">
            <Col className="name">
                SERGIO SOTO SOUSA
                <br></br>
                <span className="title">
                    FULL STACK DEVELOPER
                </span>
            </Col>
            <Row className="contain">
                <Col className="paragraph" sm={4} md={4} xl={4}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum sed nesciunt, omnis quam consequatur corporis vero blanditiis fugit dolorum veritatis, cumque quasi labore modi, maiores ad repudiandae amet consequuntur.
                </Col>
                <Col className="paragraph mid" sm={4} md={4} xl={4}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum sed nesciunt, omnis quam consequatur corporis vero blanditiis fugit dolorum veritatis, cumque quasi labore modi, maiores ad repudiandae amet consequuntur.
                </Col>
                <Col className="paragraph" sm={4} md={4} xl={4}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum sed nesciunt, omnis quam consequatur corporis vero blanditiis fugit dolorum veritatis, cumque quasi labore modi, maiores ad repudiandae amet consequuntur.
                </Col>
                
            </Row>
        </Row>
    )
}
export default Home