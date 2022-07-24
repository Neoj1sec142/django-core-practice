import {Card, Container, Row, Col, Button} from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
// import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
// import { LoadPosts, UpdateNewPostState, UploadPost } from '../store/actions/PostActions'
import CreateTo from '../components/CreateTo'
import { GetPosts } from '../services/PostServices'


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

// user, name, description, img_url, priority, date_created, date_modified


const Todo = (props) => {
    const [create, setCreate] = useState(false)
    const [posts, setPosts] = useState ([])
    const handleCre = (e) => {
        if(create === false){
            setCreate(true)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
        const data = await GetPosts()
        setPosts(data)
        }
        fetchData()
        .catch(err => console.error(err, 'ERR TODO'))
    },[])
    const sorted = posts.sort((a,b) => Number(a.date_created) - Number(b.date_created))
    console.log(sorted, "POSTS")
    if(!create){
        return(
            <Container fluid>
            <Card>
                <CardHeader>
                    <Button onClick={(e) => handleCre(e)}>Add To List</Button>
                </CardHeader>
                {posts.map((post, i) => ( 
                <Card key={i}>
                 <Row style={{
                        border: '1px solid black',
                        width: '80%',
                        marginLeft: '10%',
                        marginRight: '10%'
                    }}>
                    <Col>{post.name}</Col>
                    <Col>{post.description}</Col>
                    <Col>{post.img_url}</Col>
                    <Col>{post.priority}</Col>
                 </Row>
                 </Card>))}
                
            </Card>
            </Container>

            //<Form.Group className="mb-3" controlId="formBasicCheckbox">
            //<Form.Check type="checkbox" label="Check me out" />
            //</Form.Group>
        )
    }else if(create){
        return(<CreateTo user={props.user}/>)
        
    }else{
        return(
            <div>Loading...</div>
        )
    }
}

export default Todo