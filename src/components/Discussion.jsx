import React, { useState } from 'react';
import CardHeader from './CardHeader';

const users = ['Hitesh', 'Jon Doe', 'Lorem Itsum', 'Bunny', 'Kim'];

const ReplyInput = (props) => {
  return (
    <div>
      <form onSubmit={props.handelSubmitInputChange}>
        <input name={props.postId} className="form-control mt-2 my-2" placeholder="Enter your reply" onChange={ props.handelReplyInputChange } required/>
      </form>
    </div>
  )
}



function Comments(props){  
  const [showInput, setInput] = useState(false);
  const [commentInp, setCommentInput] = useState('');
  const [comments, setComment] = useState([]);

  const handelReplyInputChange = (e) => {
    console.log(e.target.value);
    setCommentInput(e.target.value);
  }

  const handelSubmitInputChange = (e) => {
    e.preventDefault();
    let user = users[Math.floor(Math.random()*4)];

      let commentDetails = {
      postedByUser: user,
      timeStamp : Date.now(),
      commentId : user + Math.floor(Math.random()*1000),
      content : commentInp,
      voteCount:0
      }
      console.log(commentDetails);
      // This will update to array of set
      let newPosts = [...comments];
      newPosts.push(commentDetails);
      setComment(newPosts);
      setCommentInput('');
      setInput(!showInput);
      console.log(comments);
  }

  const voteUp = (e) => {
    var newPostArray = [...comments];
    ++newPostArray[e].voteCount;
    setComment(newPostArray); 
  }

  const downVote = (e) => {
    var newPostArray = [...comments];
    --newPostArray[e].voteCount;
    setComment(newPostArray); 
  }

    return(
      <div className="text-left card-div">
        <CardHeader postedByUser={props.data.postedByUser} timeStamp={props.data.timeStamp} />
        <p className="content"> { props.data.content } </p>
        <div>
          { props.data.voteCount } <img className="image-vote" src="https://static.thenounproject.com/png/341249-200.png" width="30px" onClick={props.voteUp} alt="Vote Up" /> 
          <img className="image-vote" src="https://static.thenounproject.com/png/341237-200.png" width="30px" alt="Down vote" onClick={props.downVote}/> 
          <span className="cursor-pointer" onClick={()=>setInput(!showInput)} >reply</span>
          { showInput ? <ReplyInput postId={props.data.postId} handelReplyInputChange = {handelReplyInputChange} handelSubmitInputChange = {handelSubmitInputChange} /> : null }
        </div>
        <ul>
          { comments.length>0 ? 
            comments.map((comment, key) => {
            return(<Comments data = {comment} voteUp={() => voteUp(key) } downVote = {() => downVote(key)} />)
          })
          : null }
        </ul>
      </div>
    )
  }

function Discussion(props){  
  const [showInput, setInput] = useState(false);
  const [commentInp, setCommentInput] = useState('');
  const [comments, setComment] = useState([]);

  const handelReplyInputChange = (e) => {
    console.log(e.target.value);
    setCommentInput(e.target.value);
  }

  const voteUp = (e) => {
    var newPostArray = [...comments];
    ++newPostArray[e].voteCount;
    setComment(newPostArray); 
  }

  const downVote = (e) => {
    var newPostArray = [...comments];
    --newPostArray[e].voteCount;
    setComment(newPostArray); 
  }

  const handelSubmitInputChange = (e) => {
    e.preventDefault();
    let user = users[Math.floor(Math.random()*4)];

      let commentDetails = {
      postedByUser: user,
      timeStamp : Date.now(),
      commentId : user + Math.floor(Math.random()*1000),
      content : commentInp,
      voteCount:0
      }
      console.log(commentDetails);
      // This will update to array of set
      let newPosts = [...comments];
      newPosts.push(commentDetails);
      setComment(newPosts);
      setCommentInput('');
      setInput(!showInput);
      console.log(comments);
  }


    return(
      <div className="text-left card-div">
        <CardHeader postedByUser={props.data.postedByUser} timeStamp={props.data.timeStamp} />
        <p className="content"> { props.data.content } </p>
        <div>
          { props.data.voteCount } <img className="image-vote" src="https://static.thenounproject.com/png/341249-200.png" width="30px" onClick={props.voteUp} alt="Vote Up" /> 
          <img className="image-vote" src="https://static.thenounproject.com/png/341237-200.png" width="30px" alt="Down vote" onClick={props.downVote}/> 
          <span className="cursor-pointer" onClick={()=>setInput(!showInput)} >reply</span>
          { showInput ? <ReplyInput postId={props.data.postId} handelReplyInputChange = {handelReplyInputChange} handelSubmitInputChange = {handelSubmitInputChange} /> : null }
        </div>
        <ul>
          { comments.map((comment, key) => {
            return(<Comments data = {comment} voteUp={() => voteUp(key) } downVote = {() => downVote(key) }/>)
          }) }
        </ul>
      </div>
    )
  }

  export default Discussion;