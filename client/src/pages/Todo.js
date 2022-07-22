import {Card, Container, Row, Button} from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { LoadPosts, UpdateNewPostState, UploadPost } from '../store/actions/PostActions'
import CreateTo from '../components/CreateTo'


const mapStateToProps = ({postState, commState}) => {
    return{postState, commState}
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadPosts: () => dispatch(LoadPosts()),
        updateState: () => dispatch(UpdateNewPostState()),
        upload: () => dispatch(UploadPost())
    }
}

const Todo = () => {
    const [create, setCreate] = useState(false)

    const handleCre = (e) => {
        if(create === false){
            setCreate(true)
        }
    }
    
    if(!create){
        return(
            <Container fluid>
            <Card>
                <CardHeader>
                    <Button onClick={(e) => handleCre(e)}>Add To List</Button>
                </CardHeader>
                <Row>Hey Bud Todos Here</Row>
            </Card>
            </Container>

            //<Form.Group className="mb-3" controlId="formBasicCheckbox">
            //<Form.Check type="checkbox" label="Check me out" />
            //</Form.Group>
        )
    }else if(create){
        return(<CreateTo />)
        
    }else{
        return(
            <div>Loading...</div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)