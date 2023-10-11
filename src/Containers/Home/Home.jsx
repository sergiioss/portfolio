import './home.scss'
import { Row,Col,NavLink } from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import img4 from '../../assets/img4.png'

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
                <Col className="paragraph" xs={6} sm={6} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img"/>
                    <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Demo</NavLink>
                    <NavLink className="link-image-github" href="https://github.com/sergiioss/cambia_tu_fisico" target="_blank">Github</NavLink>

                </Col>
                <Col className="paragraph" xs={6} sm={6} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img"/>
                    <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank" >Demo</NavLink>
                    <NavLink className="link-image-github" href="https://cambia-tu-fisico.vercel.app/" target="_blank" >Github</NavLink>

                </Col>
                <Col className="paragraph" xs={6} sm={6} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img"/>
                    <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank" >Demo</NavLink>
                    <NavLink className="link-image-github" href="https://cambia-tu-fisico.vercel.app/" target="_blank" >Github</NavLink>
                </Col>
                <Col className="paragraph" xs={6} sm={6} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img"/>
                    <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank" >Demo</NavLink>
                    <NavLink className="link-image-github" href="https://cambia-tu-fisico.vercel.app/" target="_blank" >Github</NavLink>
                </Col>
                <Col className="paragraph" xs={6} sm={6} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img" sm={4} md={4} xl={4} xxl={4}/>
                    <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank" >Demo</NavLink>
                    <NavLink className="link-image-github" href="https://cambia-tu-fisico.vercel.app/" target="_blank" >Github</NavLink>
                </Col>
                <Col className="paragraph" xs={6} sm={6} md={4} xl={4} xxl={4}>
                    <Image src={img4} className="img"/>
                    <NavLink className="link-image-demo" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Demo</NavLink>
                    <NavLink className="link-image-github" href="https://cambia-tu-fisico.vercel.app/" target="_blank">Github</NavLink>
                </Col>
                <NavLink href="#projects" className="icon-arrow-down"></NavLink>
            </Row>
            <Row id="projects">
                    
            </Row>
        </Row>
    )
}
export default Home