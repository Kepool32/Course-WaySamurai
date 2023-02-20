import {userAPI} from "../Componets/API/api";

let initilize={
    user: [],
    pageSize: 3000,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false,
    followingInProgress:[]

};

const userReducer=(state = initilize,action)=>
{


    switch (action.type) {
        case 'Follof':
            return {
                ...state,
                user: state.user.map(u => {
                    if (u.id === action.userid) {

                        return {...u, followed: true}
                    }
                    return u;

                })
            }
                case 'Unfollofc':
            return {...state,
                user:state.user.map(u=>{
                    if(u.id===action.userid) {

                        return {...u, followed: false}

                    }
                    return u;
                    })
                }
        case'setUser':

        {
            return {...state, user:action.user}
        }

        case'setCurrenPage': {
                return{...state,currentPage: action.currentPage}
        }
        case'setTotalPageCount': {
            return{...state,totalUsersCount: action.totalCount}
        }

        case'setisFetching': {
            return{...state,isFetching: action.isFetching}
        }
        case'setfollowingInProgress': {
            return{...state,
                followingInProgress:action.isFetching
                    ?[...state.followingInProgress,action.userId]
                    :state.followingInProgress.filter(id=>id=!action.userId)





            }
        }

        default:
            return state;
    }
}
export const follofc=(userid)=>(

    {type:'Follof',userid}


)
export const unfollofc=(userid)=>(

    {type:'Unfollofc',userid}


)

export const setUserAC=(user)=>(

    {type:'setUser',user}


)
export const setCurrentPageAC=(currentPage)=>(

    {type:'setCurrenPage',currentPage}


)
export const  setTotalPageCountAC=(totalCount)=>(

    {type:'setTotalPageCount',totalCount}


)
export const  setisFetchingAC=(isFetching)=>(

    {type:'setisFetching',isFetching}


)
export const setfollowingInProgressAC=(isFetching,userId)=>(

    {type:'setfollowingInProgress',isFetching,userId}


)


export const getUsersThunkCreator=(currentPage,pageSize)=> {
    return (dispatch) => {




        /*dispatch(setCurrentPageAC(currentPage))*/
        dispatch(setisFetchingAC(true));
        userAPI.getUsers(currentPage, pageSize).then
        (data => {


            dispatch(setisFetchingAC(false));
            dispatch(setUserAC(data.items));
            dispatch(setTotalPageCountAC(data.totalCount));


        });
    }
}


export const unFollow=(userId)=> {



    return (dispatch) => {




        dispatch(setfollowingInProgressAC(true,userId))
        userAPI.getFolow(userId)
            .then(data => {

                if (data.resultCode === 0) {

                    dispatch(unfollofc(userId))
                }

                dispatch(setfollowingInProgressAC(false,userId))
            });



    }
}
export const Follow=(userId)=> {


    return (dispatch) => {




        dispatch(setfollowingInProgressAC(true,userId))
        userAPI.getUnfolow(userId,{},{


        })

            .then(data => {

                if (data.resultCode === 0) {

                    dispatch(follofc(userId))
                }
                dispatch(setfollowingInProgressAC(false,userId))
            });



    }
}







export default  userReducer;