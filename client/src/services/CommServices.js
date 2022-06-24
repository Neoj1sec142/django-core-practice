// import Client from "./Axios";

// export const GetComms = async () => {
//     try{
//         const res = await Client.get('comments')
//         // console.log(res)
//         return res.data
//     }catch(err){throw err}
// }

// export const GetCommById = async (id) => {
//     try{
//         const res = await Client.get(`comments/${id}`)
//         // console.log(res)
//         return res.data
//     }catch(err){throw err}
// }

// // export const CreateComm = async (newPost) => {
// //     console.log(newPost, "BEfore TRY")
// //     try {
// //         const data = {
// //             name: newPost.name,
// //             description: newPost.description,
// //             priority: newPost.priority,
// //             img_url: newPost.img_url,
// //             language_id: newPost.language_id,
// //             user_id: newPost.user_id
// //         }
// //         console.log(data, "Before axios")
// //         await Client.post(`posts/`, data)
// //         .then((res) => console.log(res, "successfully projected"))
// //         .catch((err) => console.log(err))
// //     } catch (err) {
// //         throw err
// //     } 
// // }

// export const RemoveComm = async (id) => {
//     try{
//         await Client.delete(`comments/delete/${id}`)
//         .then((res) => console.log(res, "Successfully deleted post"))
//         .catch((err) => console.log(err))
//     } catch (err) {
//         throw err
//     }
// }