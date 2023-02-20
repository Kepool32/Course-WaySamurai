import React from 'react';
import Post from './Post'
import profilepageReducer, {addPost, updateNewPostTextActionCreator} from "../../../redax/profilepage-reducer";


const Myposts = (props) => {



    let newpost =React.createRef()

    let addposts=()=>{


        props.addpost();


    }

    let updateposts=()=>{
        let text =newpost.current.value


        props.updatepost(text)


    }

    return (
        <div>
            new post
            <div>
                <textarea onChange={updateposts}  ref={newpost} value={props.NewPostText} />


                <button onClick={addposts}>Add post</button>
            </div>

            <Post messages={props.post} />
        </div>
    );
};

export default Myposts;