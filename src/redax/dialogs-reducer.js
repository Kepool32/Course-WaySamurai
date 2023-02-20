

let initilize={
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

        newMessageBody:'',

    messages:[{id:1,message:'Hello'},
        {id:2,message:'How are you'},
        {id:3,message:'I like this project'},
        {id:4,message:'good'},],}

const dialogsReducer=(state=initilize,action)=> {

    let stateCopy = {...state};

    switch (action.type) {

        case "updateNewMassage":


        stateCopy.newMessageBody = action.body;


        return {
            ...state,
            newMessageBody: action.body
        };



        case "SendMassage":



        let body = state.newMessageBody;

        return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages,{id: 6, message: body}]


        };

        default:

            return state;

}
}
export const sendMessageCreator=()=>(

    {type:'SendMassage'}


)

export const updateNewMessageBodyCreator=(body)=>(

    {type:'updateNewMassage', body: body}


)
export default  dialogsReducer;