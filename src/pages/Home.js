import { async } from "@firebase/util";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import React, { useEffect,useState } from "react";
import{auth,db}from'../firebase-con';
import "./Home.css";
function Home({isAuth}){

    const [postLists,setPostList]=useState([]);
    const postsCollectionRef=collection(db,"posts");

    useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id
     })));
        };
        getPosts();
    });

    const deletePost= async (id)=>{
        const postdoc=doc(db,"posts",id);
        await deleteDoc(postdoc);
    }


    return <div className="homePage">
        {postLists.map((post)=>{
            return <div className="postlol"> 
            <div  className="postTilte"><h1>{post.title}</h1>
            <div>{isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
            
            </div>
            </div>
            <div className="postText"> {post.postText}</div>
            
            <h3>@{post.author.name}</h3>
            
            </div>
        })}
    </div>;
}
export default Home;