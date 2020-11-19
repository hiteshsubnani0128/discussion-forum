import React, { useState } from 'react';
import './App.css';
import Discussion from './components/Discussion';

const users = ['Hitesh', 'Jon Doe', 'Lorem Itsum', 'Bunny', 'Kim'];


function App() {

  const [post, setPost] = useState([{
    postedByUser:'Hitesh',
    timeStamp: Date.now(),
    postId: 'rxgyuioer',
    content:'Hey I am Hitesh',
    voteCount: 1,
    // comments: [{
    //     commentedByUser : 'Ron',
    //     timeStamp: Date.now(),
    //     content:'Hi Hitesh How are you!',
    //     voteCount: 1,
    //     commentFor: 'rxgyuioer'
    // }]
  }]);

  // const [comments, setComment] = useState([{
  //     commentedByUser : 'Ron',
  //     timeStamp: Date.now(),
  //     content:'Hi Hitesh How are you!',
  //     voteCount: 1,
  //     commentFor: 'rxgyuioer'
  // }]);

  const [inputText, setInput] = useState();

  const handelChanges = (e) =>{
    // console.log(e);
    // When user will press Enter adding data
      e.preventDefault();

      let user = users[Math.floor(Math.random()*4)];
      let userDetails = {
      postedByUser: user,
      timeStamp : Date.now(),
      postId : user + Math.floor(Math.random()*1000),
      content : inputText,
      voteCount:0
      }

      // This will update to array of set
      let newPosts = [...post];
      newPosts.push(userDetails);
      setPost(newPosts);
      setInput('');
  }

  const handelInputChange = (e)=>{
    setInput(e.target.value);
  }

  const voteUp = (e) => {
    var newPostArray = [...post];
    ++newPostArray[e].voteCount;
    setPost(newPostArray); 
  }

  const downVote = (e) => {
    var newPostArray = [...post];
    --newPostArray[e].voteCount;
    setPost(newPostArray); 
  }

  return (
    <div className="container text-center mt-5">
      <form className="jumbotron" onSubmit={handelChanges}>
        <input className="form-control" name="mainContent" placeholder="Create new discussion" onChange={handelInputChange} value={inputText} required autoComplete="off"/>
      </form>
        { post.map( (post, key) =>{
          return(<Discussion data={ post } voteUp={() => voteUp(key) } downVote = {() => downVote(key) } />)
        })}
    </div>
  );
}

export default App;
