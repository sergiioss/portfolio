import "./Footer.scss"
import {Row,Col} from 'react-bootstrap'
import { useRef } from "react";


const Footer = () =>{

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const textareaRef = useRef(null);

    const limpiarCampos = () => {
        setTimeout(()=>{
            nameRef.current.value = "";
            emailRef.current.value = "";
            textareaRef.current.value = ""
        },500)
    };

    return(
        <Row className="footer">
            <Row className="contact-me">
                <Row>
                    <h1>Ponte en contacto conmigo</h1>
                </Row>
                <Row xs={12} sm={12} md={12} xl={12} xxl={12}>
                    <form className="form" action="https://formsubmit.co/sergiiptx@gmail.com" method="post" target="_blank">
                        <Col xs={12} sm={12} md={6} xl={6} xxl={6}>
                            <Row className="inputs">
                                <label>Name:
                                    <input className="labels" ref={nameRef} id="name" type="text" name="name" placeholder="Introduce tu nombre" required/>
                                </label>
                            </Row>
                            <Row className="inputs">
                                <label>Email:
                                    <input className="labels" ref={emailRef} id="email" type="email" name="email" placeholder="Introduce tu email" required/>
                                </label>
                            </Row>
                        </Col>
                        <Col className="message" xs={12} sm={12} md={4} xl={4} xxl={4}>
                            <label>Mensaje:
                                <textarea cols="30" rows="4" className="labels" ref={textareaRef} id="textarea" type="text" name="message" placeholder="Introduce tu mensaje" required/>
                            </label>
                        </Col>
                        <Col className="button-submit" xs={12} sm={12} md={4} xl={4} xxl={4}>
                            <input type="submit" value="Enviar" onClick={limpiarCampos}></input>
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