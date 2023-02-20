import axios from "axios";

const isnance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{

        "API-KEY":"30f0fa5f-b32c-48ad-8d37-834181"
    }




})

export const userAPI= {


    getUsers(currentPage = 1, pageSize = 10) {

        return isnance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count${pageSize}`, {

            withCredentials: true

        })

            .then(responce => {
                return responce.data;

            })
    },
    getDate(p, pageSize) {
        return isnance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count${pageSize}`, {


        }).then
        (responce => {
                return responce.data;

            }
        );

    },

    getFolow: function (id) {

        return isnance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {


            withCredentials: true,
            headers: {
                "API-KEY": "30f0fa5f-b32c-48ad-8d37-834181"

            }
        }).then(responce => {
                return responce.data;

            }
        );
    },
    getUnfolow(id){
        return isnance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {

            withCredentials:true,
            headers:{
                "API-KEY":"30f0fa5f-b32c-48ad-8d37-834181"
            }
        })
            .then(responce => {
                    return responce.data;

                }
            );

    },






 /*   getAuth: function(){

       return  isnance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials:true
            }).then(response => {

                if (response.data.resultCode===0){

                    let {id,email,login}=response.data.data;
                    this.props.setAuthUserDate(id,email,login)
                }




            }
        );
    }*/

    getProfile(userId){

        return isnance.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId);

    },


    getHeader(){
    return isnance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        {withCredentials:true
        });
    },
}

export const profileAPI={

    getStatus(userId){
        return isnance.get(`profile/status/`+userId);

    },

    updateStatus(status){
        return isnance.put(`profile/status/`,{status:status});

    }


}


