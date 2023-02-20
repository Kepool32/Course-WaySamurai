import {userAPI} from "../Componets/API/api";

const SET_USER_DATA="SET_USER_DATA"








const authReducer=(states ,action) => {
    switch (action.type) {
        case 'SET_USER_DATA':

            return {
                ...states,
                ...action.data,
                isAuth: true,
            }


        default:
            return states;
    }
}
export const setAuthUserDate=(userId, email, login)=>(

    {type:SET_USER_DATA,data:{userId,email,login}}


)
export const getAuthUserDate=()=>(dispatch)=>{

    userAPI.getHeader().then(response => {

        if (response.data.resultCode===0){

            let {id,email,login}=response.data.data;
            dispatch(setAuthUserDate(id,email,login))
        }



    });
}

export default  authReducer;
