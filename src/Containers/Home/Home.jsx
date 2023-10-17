import './home.scss'
import { Row,Col,NavLink } from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import img4 from '../../assets/img4.png'
import Footer from '../../Components/Footer/Footer'

const Home = () => {

    return (
        <>
        <Row className="home">
            <Col className="name">
                <Row className="text-name">
                    Sergio Soto Sousa
                    <br></br>
                </Row>
                <Row>
                    <span className="title">
                        FULL STACK DEVELOPER
                    </span>
                </Row>
                <Row className="subtitle">
                    <span className="text-subtitle">
                        Projects
                        <Row className="hr"></Row>
                    </span>
                </Row>
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
                <NavLink href="#about" className="icon-arrow-down"></NavLink>
            </Row>
        </Row>
        <Row id="about" xs={12} sm={12} md={12} xl={12} xxl={12}>
            <Row>
                <h1 className="text-about">About</h1>
            </Row>
            <Row>
                <Row className="greetings">
                    <h5>Hola, soy Sergio.</h5>
                    <Row className='rotate'>
                        <span className="icon-hand-paper-o"></span>
                    </Row>
                </Row>
                <Col xs={12} sm={12} md={6} xl={6} xxl={6}>
                    <p className="about-text">
                        <br></br>
                        ¡Un apasionado del desarrollo web en constante evolución y aprendizaje! Mi viaje hacia el mundo del desarrollo web comenzó con un trasfondo completamente diferente en mi anterior trabajo en Novatec, donde nos enseñaron a hacer programas para robots FANUC, donde se genero mi entusiasmo por aprender este emocionante campo.
                        <br />
                        <br />
                        Mi objetivo es seguir creciendo como desarrollador web, colaborar en proyectos emocionantes y contribuir al éxito de equipos y clientes. Estoy entusiasmado por la oportunidad de aplicar mis habilidades y mi pasión para crear experiencias web excepcionales.
                    </p>
                </Col>
                <Col className="icon-monitor" xs={6} sm={6} md={6} xl={6} xxl={6}>
                    <span className="i-monitor"></span>
                </Col>
                <Row className="experience">
                    <h3>Experience</h3>
                    <br />
                    <br />
                    <ul>
                        <li>Programador Web en EZENIT DATA SL</li>
                        <li>Bootcamp Geekshubs Full Stack Developer</li>
                    </ul>
                </Row>
                <Row className="cursos">
                    <h3>Courses</h3>
                    <ul>
                        <span>FreeCodeCamp</span>
                        <li>Front End Development Libraries</li>
                        <li>JavaScript Algorithms and Data Structures</li>
                        <li>Responsive Web Design</li>
                    </ul>
                </Row>
            </Row>
        </Row>
        <br />
        <Row id="technologies">
            <h1>Technologies</h1>
            <Row className="targets" xs={12} sm={12} md={12} xl={12} xxl={12}>
                <Col className="card-father-html w" xs={4} sm={4} md={4} xl={3} xxl={3}>
                    <Col className="card-html">
                        <Col className="card-front-html">
                        </Col>
                        <Col className="card-back-html">
                            <Row className="body-card-back">
                                <h1>HTML5</h1>
                            </Row>
                        </Col>
                    </Col>
                </Col>
                <Col className="card-father-css w" xs={4} sm={4} md={4} xl={3} xxl={3}>
                    <Col className="card-css">
                        <Col className="card-front-css">
                        </Col>
                        <Col className="card-back-css">
                            <Row className="body-card-back">
                                <h1>CSS</h1>
                            </Row>
                        </Col>
                    </Col>
                </Col>
                <Col className="card-father-js w" xs={4} sm={4} md={4} xl={3} xxl={3}>
                    <Col className="card-js">
                        <Col className="card-front-js">
                        </Col>
                        <Col className="card-back-js">
                            <Row className="body-card-back">
                                <h1>JavaScript</h1>
                            </Row>
                        </Col>
                    </Col>
                </Col>
                <Col className="card-father-react w" xs={4} sm={4} md={4} xl={3} xxl={3}>
                    <Col className="card-react">
                        <Col className="card-front-react">
                        </Col>
                        <Col className="card-back-react">
                            <Row className="body-card-back">
                                <h1>React</h1>
                            </Row>
                        </Col>
                    </Col>
                </Col>
                <Col className="card-father-github w" xs={4} sm={4} md={4} xl={3} xxl={3}>
                    <Col className="card-github">
                        <Col className="card-front-github">
                        </Col>
                        <Col className="card-back-github">
                            <Row className="body-card-back">
                                <h1>Github</h1>
                            </Row>
                        </Col>
                    </Col>
                </Col>
                <Col className="card-father-nodejs w" xs={4} sm={4} md={4} xl={3} xxl={3}>
                    <Col className="card-nodejs">
                        <Col className="card-front-nodejs">
                        </Col>
                        <Col className="card-back-nodejs">
                            <Row className="body-card-back">
                                <h1>Node JS</h1>
                            </Row>
                        </Col>
                    </Col>
                </Col>
                <Col className="card-father-redux w" xs={6} sm={6} md={4} xl={3} xxl={3}>
                    <Col className="card-redux">
                        <Col className="card-front-redux">
                        </Col>
                        <Col className="card-back-redux">
                            <Row className="body-card-back">
                                <h1>Redux</h1>
                            </Row>
                        </Col>
                    </Col>
                </Col>
                <Col className="card-father-mysql w" xs={6} sm={6} md={4} xl={3} xxl={3}>
                    <Col className="card-mysql">
                        <Col className="card-front-mysql">
                        </Col>
                        <Col className="card-back-mysql">
                            <Row className="body-card-back">
                                <h1>MySQL</h1>
                            </Row>
                        </Col>
                    </Col>
                </Col>
            </Row>
            </Row>
        <Footer />
        </>
    )
}
export default Home