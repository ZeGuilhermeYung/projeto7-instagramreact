export default function PostHeader(props){
  return (
    <div className="post-header">
      <div>
          <a href={props.userLink}><img src={props.userImg} alt={`ir para o perfil de ${props.altUser}`}/></a>
          <a href={props.userLink} alt={`ir para o perfil de ${props.altUser}`}><h1>{props.userName}</h1></a>
      </div>
      <a href={props.userLink}><ion-icon name="ellipsis-horizontal"></ion-icon></a>
    </div>
  );
}