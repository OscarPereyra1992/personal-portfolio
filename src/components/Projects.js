import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project-ui-1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "UI Desing",
      description: "Desing with React & Tailwind",
      imgUrl: projImg1,
      link: "https://oscarpereyra1992.github.io/vite-deploy/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://example.com/project2"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://example.com/project3"
    },
    {
      title: "UI Desing",
      description: "Desing with React & Tailwind",
      imgUrl: projImg1,
      link: "https://oscarpereyra1992.github.io/vite-deploy/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://example.com/project2"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://example.com/project3"
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>Ejemplos de proyectos que he realizado</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="" id="pills-tab">
                      
                     
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => (
                              <a key={index} href={project.link}>
                                <ProjectCard {...project} />
                              </a>
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      {/* ... */}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Image"></img>
    </section>
  )
}

