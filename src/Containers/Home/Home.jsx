import './home.scss'
import { Row,Col } from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import img1 from '../../assets/img1.jpg'
import img4 from '../../assets/img4.png'
import {NavLink} from 'react-bootstrap'

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
                <Col className="paragraph" sm={4} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img"/>
                    <Row className="links" sm={4} md={4} xl={4} xxl={4}>
                        <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                        <NavLink className="link-image-github" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                    </Row>
                </Col>
                <Col className="paragraph"  sm={4} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img"/>
                    <Row className="links" sm={4} md={4} xl={4} xxl={4}>
                        <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                        <NavLink className="link-image-github" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                    </Row>
                </Col>
                <Col className="paragraph"  sm={4} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img"/>
                    <Row className="links" sm={4} md={4} xl={4} xxl={4}>
                        <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                        <NavLink className="link-image-github" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                    </Row>
                </Col>
                <Col className="paragraph" sm={4} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img"/>
                    <Row className="links" sm={4} md={4} xl={4} xxl={4}>
                        <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                        <NavLink className="link-image-github" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                    </Row>
                </Col>
                <Col className="paragraph"  sm={4} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img"/>
                    <Row className="links" sm={4} md={4} xl={4} xxl={4}>
                        <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                        <NavLink className="link-image-github" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                    </Row>
                </Col>
                <Col className="paragraph"  sm={4} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img"/>
                    <Row className="links" sm={4} md={4} xl={4} xxl={4}>
                        <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                        <NavLink className="link-image-github" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Hola que tal</NavLink>
                    </Row>
                </Col>
            </Row>
        </Row>
    )
}
export default Home