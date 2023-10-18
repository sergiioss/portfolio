import "./Footer.scss"
import {Row,Col} from 'react-bootstrap'

const Footer = () =>{

    return(
        <Row className="footer">
            <Row className="contact-me">
                <Row>
                    <h1>Ponte en contacto conmigo</h1>
                </Row>
                <Row xs={12} sm={12} md={12} xl={12} xxl={12}>
                    <form className="form" action="" method="post">
                        <Col xs={12} sm={12} md={6} xl={6} xxl={6}>
                            <Row className="inputs">
                                <label>Name:
                                    <input className="labels" id="name" type="text" name="name" placeholder="Introduce tu nombre" required/>
                                </label>
                            </Row>
                            <Row className="inputs">
                                <label>Email:
                                    <input className="labels" id="email" type="email" name="email" placeholder="Introduce tu email" required/>
                                </label>
                            </Row>
                        </Col>
                        <Col className="message" xs={12} sm={12} md={4} xl={4} xxl={4}>
                            <label>Mensaje:
                                <textarea cols="30" rows="4" className="labels" id="textarea" type="text" name="message" placeholder="Introduce tu mensaje" required/>
                            </label>
                        </Col>
                        <Col className="button-submit" xs={12} sm={12} md={4} xl={4} xxl={4}>
                            <input type="submit" value="Enviar"></input>
                        </Col>
                    </form>
                </Row>
            </Row>
            <Row className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Row>
        </Row>
    )
}
export default Footer