import profilepageReducer from "./profilepage-reducer";
import dialogsReducer from "./dialogs-reducer";


let store={
    _state:{
        profilepage:{
            post: [{id: 1, message: 'How are you', likepost: 14},
                {id: 2, message: 'I like this project', likepost: 44},
                {id: 3, message: 'Wtfuck', likepost: 1},
                {id: 4, message: 'Im liker', likepost: 124},

            ],
            NewPostText: 'ihuoih'
        },
        dialogsPage: {
            dialogs: [{
                id: 1,
                name: "Дмитрий",
                amg: "https://www.the-sun.com/wp-content/uploads/sites/6/2020/04/Eminem_Surprise_Album_59544jpg-68c2djpg-JS554873507.jpg?strip=all&w=960"
            },
                {
                    id: 2,
                    name: "Сергей",
                    amg: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/tupac-shakur-portrait-argo.jpg"
                },
                {
                    id: 3,
                    name: "Виктор",
                    amg: "https://images.gawker.com/1338955830021273490/c_scale,fl_progressive,q_80,w_800.jpg"
                },
                {id: 4, name: "Генадий", amg: "https://i.timeout.ru/pix/452796.jpeg"}],

            newMessageBody:''
                    },
        message:[{id:1,message:'Hello'},
            {id:2,message:'How are you'},
            {id:3,message:'I like this project'},
            {id:4,message:'good'},],






    },
/*    getState(){
        return this._state;
    },
    subscribe(observer){

        this.calsubscribe=observer;

    },
    calsubscribe(){
        console.log("asdasd")
    },*/

/*    addPost(){

        let newPost={

            id:5,
            message:this._state.profilepage.NewPostText,
            likepost:12
        };
        this._state.profilepage.post.push(newPost);
        this._state.profilepage.NewPostText=''
        this.calsubscribe(this._state);
    },*/
/*    updatePost(newText){


        this._state.profilepage.NewPostText=newText;
        this.calsubscribe(this._state);
    },*/

    dispatch(action){

        this._state.profilepage=profilepageReducer(this._state.profilepage,action)

        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)

        this.calsubscribe(this._state);
    }
}






export default store;
window.store=store;