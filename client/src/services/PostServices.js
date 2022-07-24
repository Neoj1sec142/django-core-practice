import Client from "./Axios";

export const GetPosts = async () => {
    try{
        const res = await Client.get('posts/')
        // console.log(res)
        return res.data
    }catch(err){throw err}
}

export const GetPostById = async (id) => {
    try{
        const res = await Client.get(`posts/${id}`)
        // console.log(res)
        return res.data
    }catch(err){throw err}
}

export const CreatePost = async (newPost) => {
    console.log(newPost, "BEfore TRY")
    try {
        const data = {
            name: newPost.name,
            description: newPost.description,
            priority: newPost.priority,
            img_url: newPost.img_url,
            language_id: newPost.language_id,
            user_id: newPost.user_id
        }
        console.log(data, "Before axios")
        await Client.post(`posts/`, data)
        .then((res) => console.log(res, "successfully projected"))
        .catch((err) => console.log(err))
    } catch (err) {
        throw err
    } 
}
    
export const RemovePost = async (id) => {
    try{
        await Client.delete(`posts/delete/${id}`)
        .then((res) => console.log(res, "Successfully deleted post"))
        .catch((err) => console.log(err))
    } catch (err) {
        throw err
    }
}


