import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";



const initialState =[
    {id:'1',
     title:"learning redux toolkit", 
     content: "I have Heard good things",
     date: sub(new Date(),{minutes:10}).toISOString(),
     reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
     }
    },
    {id:'2',
     title:"Learn with React redux",
      content: "This is good for state mangement",
      date: sub(new Date(),{minutes:5}).toISOString(),
      reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
     }
    }
]


const postsReducer =createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded : {
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content,userId){
               return{
                payload:{
                    id: nanoid(),
                    title,
                    date: new Date().toISOString(),
                    content,
                    userId,
                    reactions:{
                        thumbsUp:0,
                        wow:0,
                        heart:0,
                        rocket:0,
                        coffee:0
                     }
                }
               } 
            }
        },
        reactionAdd(state,action){
            const {postId, reaction} = action.payload
           
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }

        }
            
    }
})
export const {postAdded,reactionAdd}= postsReducer.actions
export const selectAllPosts =(state)=>state.posts

export default postsReducer.reducer