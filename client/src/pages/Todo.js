import {Card, Container, Row, Button} from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
const Todo = () => {
    
    return(
        <Container fluid>
        <Card>
            <CardHeader>
                <Button>Add To List</Button>
            </CardHeader>
            <Row>Hey Bud Todos Here</Row>
        </Card>
        </Container>
    )
}

export default Todo