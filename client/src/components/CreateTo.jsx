import React from 'react'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { LoadPosts, UpdateNewPostState, UploadPost } from '../store/actions/PostActions'

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

const CreateTo = () => {
    return(
        <div>Hey there buddy component to create</div>
    )
}

export default CreateTo