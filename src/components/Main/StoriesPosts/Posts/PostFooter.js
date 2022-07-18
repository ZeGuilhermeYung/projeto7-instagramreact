import IconsClick from "../../../IconsClick";
import React from 'react';

export default function PostFooter(props){
  return (
    <div className="post-footer">
      <div className="post-first-line">
        <div>
          <IconsClick class=" like" visibleIcon="heart-outline" activeIcon="heart" />
          <IconsClick visibleIcon="chatbubble-outline" activeIcon="chatbubble" />
          <IconsClick visibleIcon="paper-plane-outline" activeIcon="paper-plane" />
        </div>
        <IconsClick visibleIcon="bookmark-outline" activeIcon="bookmark" />
      </div>
      <div className="post-second-line">
        <a href={props.visitorLink}><img src={props.visitorImg} alt={`ir para o perfil de ${props.visitorAlt}`}/></a>
        <p><h2>Curtido por <a href={props.visitorLink}><strong>{props.visitorName}</strong></a> e <a href={`${props.postLink}liked_by/`}><strong>outras {props.numberLikes} pessoas</strong></a></h2></p>
      </div>     
    </div>
  );
}