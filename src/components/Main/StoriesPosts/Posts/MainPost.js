import React from 'react';

export default function MainPost(props){

  function likePostIMG () {
    props.setLike("click-icons like active");
  }

  return (
    <a className="post-media" onClick={likePostIMG} >
      <img src={props.postMedia} alt={props.altPost}/>
    </a>
  );
}