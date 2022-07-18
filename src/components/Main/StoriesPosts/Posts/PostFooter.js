import IconsClick from "../../../IconsClick";

export default function PostFooter(props){
  return (
    <div className="post-footer">
      <div className="post-first-line">
        <div>
          <IconsClick visibleIcon="heart-outline" class="like" activeIcon="heart" />
          <IconsClick visibleIcon="chatbubble-outline" class="normal" activeIcon="chatbubble" />
          <IconsClick visibleIcon="paper-plane-outline" class="normal" activeIcon="paper-plane" />
        </div>
        <IconsClick visibleIcon="bookmark-outline" class="normal" activeIcon="bookmark" />
      </div>
      <div className="post-second-line">
        <a href={props.visitorLink}><img src={props.visitorImg} alt={`ir para o perfil de ${props.visitorAlt}`}/></a>
        <p><h2>Curtido por <a href={props.visitorLink}><strong>{props.visitorName}</strong></a> e <a href={`${props.postLink}liked_by/`}><strong>outras {props.numberLikes} pessoas</strong></a></h2></p>
      </div>     
    </div>
  );
}