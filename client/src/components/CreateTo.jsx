import React from 'react'
import {Card, Form, Button} from 'react-bootstrap'
// import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
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
    const [newPost, setNewPost] = useState({})
    const handleChange = (e) => {
        setNewPost({[e.target.name]: e.target.value})
        // console.log(props.postState.newPost)
    }

    
    return(
        <Card>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title of Merch:</Form.Label>
                    <Form.Control type="title" placeholder="Enter Title Here" name='title' onChange={handleChange} value={newPost.title} required={true}/>
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
                {/* <Form.Group className="mb-3" controlId="formBasicPrice" onChange={handleChange}>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Price Here" name='price' value={ap.price} required={true}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl" onChange={handleChange}>
                    <Form.Label>Links</Form.Label>
                    <Form.Control type="url" placeholder="Links Here" name='url' value={ap.url} required={true}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
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