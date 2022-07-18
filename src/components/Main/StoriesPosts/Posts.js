import PostHeader from "./Posts/PostHeader";
import MainPost from "./Posts/MainPost";
import PostFooter from "./Posts/PostFooter";

function Post(props) {
  return (
    <div className="post">
        <PostHeader userLink={props.userLink} userImg={props.userImg} altUser={props.altUser} userName={props.userName} />
        <MainPost postLink={props.postLink} postMedia={props.postMedia} altPost={props.altPost} />
        <PostFooter visitorLink={props.visitorLink} visitorImg={props.visitorImg} visitorAlt={props.visitorAlt} visitorName={props.visitorName} numberLikes={props.numberLikes} />
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
      visitorImg:"./assets/img/atila-foto.png",
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