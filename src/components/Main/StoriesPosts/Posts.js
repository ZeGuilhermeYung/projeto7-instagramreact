import IconsClick from "../../IconsClick";

function Post(props) {
  return (
    <div className="post">
        <div className="post-header">
          <div>
              <a href={props.userLink}><img src={props.userImg} alt={`ir para o perfil de ${props.altUser}`}/></a>
              <a href={props.userLink} alt={`ir para o perfil de ${props.altUser}`}><h1>{props.userName}</h1></a>
          </div>
          <a href={props.userLink}><ion-icon name="ellipsis-horizontal"></ion-icon></a>
        </div>
        <a className="post-media" href={props.postLink}><img src={props.postMedia} alt={props.altPost}/></a>
        <div className="post-footer">
          <div className="post-first-line">
            <div>
              <IconsClick visibleIcon="heart-outline" class="like" activeIcon="heart"/>
              <IconsClick visibleIcon="chatbubble-outline" class="normal" activeIcon="chatbubble"/>
              <IconsClick visibleIcon="paper-plane-outline" class="normal" activeIcon="paper-plane"/>
            </div>
            <a href=""><ion-icon name="bookmark-outline"></ion-icon></a>
          </div>
          <div className="post-second-line">
            <a href={props.visitorLink}><img src={props.visitorImg} alt={`ir para o perfil de ${props.visitorAlt}`}/></a>
            <p><h2>Curtido por <a href={props.visitorLink}><strong>{props.visitorName}</strong></a> e <a href={`${props.postLink}liked_by/`}><strong>outras {props.numberLikes} pessoas</strong></a></h2></p>
          </div>     
        </div>
      </div>
  );
}

export default function Posts() {
  const posts = [
    {
      userLink:"https://www.instagram.com/meowed/",
      userImg:"./assets/img/meowed-logo.jpeg",
      altUser:"Meowed",
      userName:"meowed",
      postLink:"https://www.instagram.com/p/CeTqGa9suvB/",
      postMedia:"./assets/img/gato-telefone.jpeg",
      altPost:"gato olhando um telefone",
      visitorLink:"https://www.instagram.com/respondeai/",
      visitorImg:"./assets/img/Responde-ai.jpeg",
      visitorAlt:"Responde Aí",
      visitorName:"respondeai",
      numberLikes:"101.523"
    },
    {
      userLink:"https://www.instagram.com/barked/",
      userImg:"./assets/img/Barked-logo.jpeg",
      altUser:"Barked",
      userName:"barked",
      postLink:"https://www.instagram.com/p/Cea2J5OPSGB/",
      postMedia:"./assets/img/cachorro-relaxado.jpeg",
      altPost:"cachorro relaxado",
      visitorLink:"https://www.instagram.com/adorable___animals/",
      visitorImg:"./assets/img/adorable_animals-logo.jpeg",
      visitorAlt:"Adorable Animals",
      visitorName:"adorable_animals",
      numberLikes:"99.159"
    },
    {
      userLink:"https://www.instagram.com/nerdbunker/",
      userImg:"./assets/img/nerbunker-logo.jpg",
      altUser:"Nerd Bunker",
      userName:"nerdbunker",
      postLink:"https://www.instagram.com/p/Cd0-Tvus-10/",
      postMedia:"./assets/img/dr-estranho-poster.png",
      altPost:"pôster do filme Doutor Estranho no Multiverso da Loucura",
      visitorLink:"https://www.instagram.com/respondeai/",
      visitorImg:"https://www.instagram.com/oatila/",
      visitorAlt:"Átila Iamarino",
      visitorName:"oatila",
      numberLikes:"1.254.159"
    }
  ];

  return (
    <div className="posts">
      {posts.map(post => <Post userLink={post.userLink} userImg={post.userImg} altUser={post.altUser} userName={post.userName} postLink={post.postLink} postMedia={post.postMedia} altPost={post.altPost} visitorLink={post.visitorLink} visitorImg={post.visitorImg} visitorAlt={post.visitorAlt} visitorName={post.visitorName} numberLikes={post.numberLikes} />)}
    </div>
  );
}