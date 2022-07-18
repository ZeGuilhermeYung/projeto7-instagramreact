import React from 'react';

export default function IconsClick(props) {
  const [like, setLike] = React.useState("click-icons like");

  function likePost () {
    like === "click-icons like active" ? setLike("click-icons like") : setLike("click-icons like active");
  }

  return (
    <a href={props.link} className={props.class ? like : "click-icons"} onClick={likePost} >
      <ion-icon name={props.visibleIcon} alt={props.alt}></ion-icon>
      <ion-icon name={props.activeIcon} alt={props.alt}> </ion-icon>
    </a>
  );
}