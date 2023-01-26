import { Container, Row,Col,Image} from "react-bootstrap";
import { Link, useParams } from "react-router-dom"
import './ProductImage.css'



const ProductDetail=() => {
    const params = useParams();
    const products = {
        
        '001': {
            img1: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' 
            ,img2: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' 
           ,img3: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
            ,review1: 'good product'
            ,review2:'best in market'
            ,review3:'best in buissness'
        }
        , 

        '002': {
            img1: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' 
            ,img2: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' 
           ,img3: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
            ,review1: 'good movie'
            ,review2:'best in shop'
            ,review3:'one time watchable'
        } 
,
        '003': {
            img1: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' 
            ,img2: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' 
           ,img3: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
            ,review1: 'excellent piece of art'
            ,review2:'new wave cinema'
            ,review3:'clear cut film making'
        } 
,
        '004': {
            img1: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' 
            ,img2: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' 
           ,img3: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
            ,review1: 'everything is cinema'
            ,review2:'kill movies'
            ,review3:'new wave cinema'
        } 
,
        '005': {
            img1: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' 
            ,img2: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' 
           ,img3: 'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'
            ,review1: 'film naking at its top'
            ,review2:'new wave'
            ,review3:'killer movie'
        } 
         
    }
    
    let item = params.productId
    console.log(products[item])

    return <>
    <Container fluid>
    <Row>
        <Col >
        <Image src={products[item].img1} className='image'/>
       </Col>
       <Col>
        <Image src={products[item].img2} className='image'/>
        </Col>
        <Col>
        <Image src={products[item].img3} className='image'/>
        </Col>
    </Row>
    <Row>
        
        <h2>Reviews:</h2>
        <Col>
        <h1>{products[item].review1}</h1>
        </Col>
        <Col>
        <h1>{products[item].review2}</h1>
        </Col>
        <Col>
        <h1>{products[item].review3}</h1>
        </Col>
        
    </Row>
    <center>
    <Link to='..' relative="path" className="btn btn-primary">Back</Link>
    </center>
        </Container>
   
    </>

}

export default ProductDetail

