import React from 'react';

export default function IconsClick(props) {
  function likePost () {
    props.like === "click-icons like active" ? props.setLike("click-icons like") : props.setLike("click-icons like active");
  }

  return (
    <a href={props.link} className={props.class ? props.like : "click-icons"} onClick={likePost} >
      <ion-icon name={props.visibleIcon} alt={props.alt}></ion-icon>
      <ion-icon name={props.activeIcon} alt={props.alt}></ion-icon>
    </a>
  );
}