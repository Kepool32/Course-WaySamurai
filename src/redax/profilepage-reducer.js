import {profileAPI, userAPI} from "../Componets/API/api";

let initilize={
        post: [{id: 1, message: 'How are you', likepost: 14},
            {id: 2, message: 'I like this project', likepost: 44},
            {id: 3, message: 'Wtfuck', likepost: 1},
            {id: 4, message: 'Im liker', likepost: 124},

        ],
        NewPostText: 'ihuoih',
    profile:null,
    status:""
    };

const profilepageReducer=(state = initilize,action)=>
{


    switch (action.type) {
        case "addPost": {


            let newPost = {

                id: 5,
                message: state.NewPostText,
                likepost: 12

            };
           return {

                ...state,
                post:[...state.post,newPost],
                NewPostText:' '}




        }
        case "updatePost": {
            return {
                ...state,
                NewPostText: action.newText
            }
        }
        case "UserProfile":
            {
                return   {
                    ...state,
                    profile:action.profile
                }

        }
        case "SetStatus":
        {
            return   {
                ...state,
                status:action.status
            }

        }
        default:
            return state;
    }
}
export const addPost=()=>(

    {type:'addPost'}


)
export const updateNewPostTextActionCreator=(text)=>(

    {type:'updatePost', newText: text}


)
export const setUserProfile=(profile)=>(

    {type:'UserProfile', profile}


)
export const SetStatus=(status)=>(

    {type:'SetStatus', status}


)
export const getUserProfile=(userId)=>(dispatch)=> {

    userAPI.getProfile(userId).then
    (response => {

            dispatch(setUserProfile(response.data));


        }
    );
}

export const getStatus=(userId)=>(dispatch)=>{


    profileAPI.getStatus(userId).then
    (response => {

            dispatch(SetStatus(response.data));


        }
    );

}
export const getupdate=(status)=>(dispatch)=>{


    profileAPI.updateStatus(status).then
    (response => {
          if(response.data.resultCode===0){

              dispatch(SetStatus(status));

          }



        }
    );

}





export default  profilepageReducer;