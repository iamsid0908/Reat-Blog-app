import React, { useState ,useEffect} from "react";

import "./CreatePost.css";
import{addDoc, collection} from'firebase/firestore';
import{db,auth}from"../firebase-con";
import{useNavigate} from'react-router-dom'

function CreatePost({isAuth}){

    const[title,setTitle]=useState("")
    const[postText,setPostText]=useState("")
    const postsCollectionRef=collection(db,"posts")
    const navigate=useNavigate();
    const createPost=async()=>{
        await addDoc(postsCollectionRef, {title,postText,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid},
        } );
        navigate("/");
    };

    // useEffect(() => {
    //     if (!isAuth) {
    //       navigate("/login");
    //     }
    //   }, []);


    return <div className="createPost">
        <div className="cpContainer">
            <h1>Create a Post</h1>
            <div className="inputGp">
                <label>Title: </label>
                <input placeholder="Title" className="post"  onChange={(event)=>{
                    setTitle(event.target.value);
                }}/>
            </div>
            <div className="inputGp">
                <label>Post:</label>
                <textarea placeholder="post..." className="text"  
                onChange={(event)=>{
                    setPostText(event.target.value);
                }}
                ></textarea>
            </div>
            <button onClick={createPost}>Submit</button>
        </div>
    </div>
}
export default CreatePost;