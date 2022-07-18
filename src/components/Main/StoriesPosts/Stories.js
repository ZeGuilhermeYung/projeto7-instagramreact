function Story(props) {
  return (
    <div>
      <a className="story" href={props.link} alt={`stories de ${props.alt}`}>
          <img src="./assets/img/Stories-ring.svg"/>
          <img src={props.img}/>
      </a>
      <p><h4>{props.userName}</h4></p>
    </div>
  );
}

export default function Stories() {
  const stories = [
    {link:"https://www.instagram.com/nerdbunker/", alt:"Nerd Bunker", img:"./assets/img/nerbunker-logo.jpg", userName:"nerdbunker"},
    {link:"https://www.instagram.com/9gag/", alt:"Nine Gag", img:"./assets/img/9gag-logo.svg", userName:"9gag"},
    {link:"https://www.instagram.com/flamengodadepressao/", alt:"Flamengo da Depressão", img:"./assets/img/Flamengo-logo.svg", userName:"flamengodadepressao"},
    {link:"https://www.instagram.com/edifica.adm/", alt:"Edifica admnistradora de Condomínios", img:"./assets/img/Edifica-logo.png", userName:"edifica.adm"},
    {link:"https://www.instagram.com/respondeai/", alt:"Responde Aí", img:"./assets/img/Responde-ai.jpeg", userName:"respondeai"},
    {link:"https://www.instagram.com/meowed/", alt:"Meowed", img:"./assets/img/meowed-logo.jpeg", userName:"meowed"},
    {link:"https://www.instagram.com/barked/", alt:"Barked", img:"./assets/img/Barked-logo.jpeg", userName:"barked"},
    {link:"https://www.instagram.com/oatila/", alt:"Átila Iamarino", img:"./assets/img/atila-foto.png", userName:"oatila"}
  ];
  
  return (
    <div className="stories">
      {stories.map(story => <Story link={story.link} alt={story.alt} img={story.img} userName={story.userName}/>)}
      <a href=""><ion-icon name="chevron-forward-circle"></ion-icon></a>
    </div>
  );
}