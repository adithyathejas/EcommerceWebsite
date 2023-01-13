import { Col, Container, Image, Row } from "react-bootstrap";


const About = () => {
  return (
    <Container fluid>
        <Row className="text-bg-dark  text-center">
            <Col>
            <h1 lg>The Movie Archeve</h1>
            </Col>
        </Row>
        <Row className="m-3">
        <Col>
            <Image fluid rounded src="https://cdn.dribbble.com/users/1177244/screenshots/7026258/media/8dce3d9c4776bad9d72d9e0c09995496.png?compress=1&resize=768x576&vertical=top" />
            </Col>
            <Col xs="8" >   
            <h2 className="font-weight-bold">
            Archeve is a movie library for cinema lovers. We obtain legal license to
        show you the latest releases.We are an independent platform which allows
        viewers to watch their favorite movie in the comfort of their home!
            </h2>
        
            </Col> 
           
        
        
        </Row>
        <Row>
           
    <footer className="fixed-bottom">
    <Row className="mt-4 text-bg-dark">
            <p>
        Contact us at :  {"moviearcheve1234@gmail.com"}
        </p>
            </Row>

    <Row className=" text-bg-dark ">
       <a href="mailto:contact@the-movie-archive.com">
          contact@the-movie-archive.com
        </a>
       </Row>
    </footer>
      
        
      
        </Row>
    </Container>
  );
};

export default About;
