import React from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
// import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import {CreatePost} from '../services/PostServices.js'
// import { LoadPosts, UpdateNewPostState, UploadPost } from '../store/actions/PostActions'

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

const CreateTo = (props) => {
    const params = useParams()
    const [newPost, setNewPost] = useState({
        name: '',
        description: '',
        img_url: '',
        priority: 0
    })
    const handleChange = (e) => {
        setNewPost({[e.target.name]: e.target.value})
        // console.log(props.postState.newPost)
    }
    // console.log(props, "Props")
    const handleSubmit = async (e) => {
        e.preventDefault()
        await CreatePost(newPost)
    }

    
    return(
        <Card>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title of Merch:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title Here" name='name' onChange={handleChange} value={newPost.name} required={true}/>
                    <Form.Text className="text-muted">
                        This will be displayed with the image so make sure its typed right.
                    </Form.Text>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicImg" onChange={handleChange}>
                    <Form.Label>Add an Image:</Form.Label>
                    <Form.Control type="url" placeholder="URL for Image Here" name='image' value={ap.image} required={true}/>
                    <Form.Text className="text-muted">
                        Make sure the URL isnt to long or it wont be accepted as a post. (250 ch)
                    </Form.Text>
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" placeholder="Description Here" name='description' onChange={handleChange} value={newPost.description} required={true}/>
                    <Form.Text className="text-muted">
                        Add a short description about your merch.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Img Url</Form.Label>
                    <Form.Control type="text" placeholder="Img Url Here" name='img_url' onChange={handleChange} value={newPost.img_url} required={true}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control type="text" placeholder="Priority Here" name='priority' onChange={handleChange} value={newPost.priority} required={true}/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </Card>
    )
    
}

export default CreateTo