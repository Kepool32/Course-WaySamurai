import React from 'react';

import Mes from "./Mes";
import Likeposts from "./likeposts";

const Post = (props) => {


    let Messages=props.messages.map(m=><Mes message={m.message} key={m.id} likepost={m.likepost} />)
    /*let likePost=props.messages.map(l=><Likeposts likepost={l.likepost}/>)*/

    return (
        <div>

            <div >
                {Messages}

            </div>

           {/* <div >
                {likePost}
            </div>*/}


        </div>
    );
};

export default Post;