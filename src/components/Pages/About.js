import { Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
        <Row>
        <h1>The Movie Archive</h1>
        </Row>
        <Row>
        <Col>
            <Image round src="https://cdn.dribbble.com/users/1177244/screenshots/7026258/media/8dce3d9c4776bad9d72d9e0c09995496.png?compress=1&resize=768x576&vertical=top" /> 
            </Col>
            <Col>
            <p>
        Archeve is a movie library for cinema lovers. We obtain legal license to
        show you the latest releases.We are an independent platform which allows
        viewers to watch their favorite movie in the comfort of their home!
      </p>
            </Col> 
           
        
        
        </Row>
        <Row>
        <p>
        Contact us at:{"moviearcheve1234@gmail.com"}
        <a href="mailto:contact@the-movie-archive.com">
          contact@the-movie-archive.com
        </a>
      </p>
        </Row>
    </Container>
  );
};

export default About;
