import React from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'
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
    const n = useNavigate()
    // const {id} = useParams()
    const [newPost, setNewPost] = useState({
        name: '',
        description: '',
        img_url: '',
        priority: 0,
        user_id: props.user
    })
    const handleChange = (e) => {
        setNewPost({...newPost, [e.target.name]: e.target.value})
        // console.log(props.postState.newPost)
    }
    // console.log(props, "Props")
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(props.user){
        await CreatePost(newPost)
        // n('/todo')
        }else{
            alert("User is Undefined")
        }
    }

    console.log(props, "Params")
    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Name of Post:</Form.Label>
                    <input type="text" placeholder="Enter Name Here" name='name' onChange={handleChange} value={newPost.name} required={true}/>
                    <br></br>
                    <Form.Text className="text-muted">
                        This will be displayed with the image so make sure its typed right.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description:</Form.Label>
                    <input type="text" placeholder="Description Here" name='description' onChange={handleChange} value={newPost.description} required={true}/>
                    <br></br>
                    <Form.Text className="text-muted">
                        Add a short description about your merch.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Img Url</Form.Label>
                    <input type="text" placeholder="Img Url Here" name='img_url' onChange={handleChange} value={newPost.img_url} required={true}/>
                    <br></br>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Priority</Form.Label>
                    <input type="text" placeholder="Priority Here" name='priority' onChange={handleChange} value={newPost.priority} required={true}/>
                    <br></br>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </form>
        </Card>
    )
    
}

export default CreateTo