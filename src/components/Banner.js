import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Banner = () => {
    
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "UI/UX Designer", "App Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] =useState(300 - Math.random() *100)
    const period = 20;

    useEffect(() =>{
        let ticker = setInterval(() =>{
            tick();
        }, delta)

        return () =>{clearInterval(ticker)};
    }, [text])


    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let uptadeText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1);

        setText(uptadeText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && uptadeText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && uptadeText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+ 1);
            setDelta(500);
        }
    }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({isVisible}) =>
            <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
            <span className="tagline">Bienvenido a mi Portafolio</span>
            <h1>
              {"Soy Oscar Pereyra: "}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Soy un Desarrollador Front-End apasionado por el diseño de interfaces y la creación de Apps.
            </p>
            <button onClick={()=>  href="mailto:oscarpereyra.mhs@gmail.com?Subject=Interesado%20en%20tu%20servicios"}>
              Hablemos! <ArrowRightCircle size={25} />
            </button>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};


