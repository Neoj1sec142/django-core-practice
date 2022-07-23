import {Card, Container, Row, Button} from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
// import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
// import { LoadPosts, UpdateNewPostState, UploadPost } from '../store/actions/PostActions'
import CreateTo from '../components/CreateTo'


// const mapStateToProps = ({postState, commState}) => {
//     return{postState, commState}
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         loadPosts: () => dispatch(LoadPosts()),
//         updateState: () => dispatch(UpdateNewPostState()),
//         upload: () => dispatch(UploadPost())
//     }
// }

// class Post(models.Model):
//     # language_id = models.ForeignKey(Language, on_delete=models.CASCADE, related_name='posts', blank=True)
//     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts', blank=True)
//     name = models.CharField(max_length=256)
//     description = models.TextField(default='Needs description', blank=True, null=True)
//     img_url = models.URLField(max_length=512, blank=True, null=True)
//     priority = models.SmallIntegerField()
//     date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
//     date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
//     def __str__(self):
//         return self.name

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

export default Todo