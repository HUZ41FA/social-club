export default (post = [], action) =>{
    switch(action.type){
        case "FETCH_ALL":
            return action.payload
        case "CREATE":
            return [...post, action.payload]
        case "UPDATE":
            return post.map((post)=> post._id === action.payload._id ? action.payload : post)
        case "DELETE":
            return post.filter((post)=>post._id!==action.payload) 
        case "LIKE":
            return post.map((post)=> post._id === action.payload._id ? action.payload : post)
        default:
            return post
    }
}

