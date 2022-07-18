function ProfileSuggestion(props) {
  return (
    <li>
      <div className="profile-suggestion">
        <a href={props.link}><img src={props.img} alt={props.alt}/></a>
        <div>
            <a href={props.link}><p><h1>{props.username}</h1></p></a>
            <p><h5>{props.followYou ? "Segue Você" : "Novo no Instagram"}</h5></p>
        </div>
      </div>
      <a href=""><h3>Seguir</h3></a>
    </li>
  );
}

export default function Suggestions() {
  const profiles = [
    {link:"https://www.instagram.com/grandesnomesdaarquitetura/", img:"./assets/img/arquitetura.svg", alt:"ir para o perfil de Grandes nomes da Arquitetura", username:"grandesnomesdaarquitetura", followYou:true},
    {link:"https://www.instagram.com/chibirdart/", img:"./assets/img/chibirdart-logo.jpeg", alt:"ir para o perfil de chibirdart", username:"chibirdart", followYou:true},
    {link:"https://www.instagram.com/razoesparaacreditar/", img:"./assets/img/razoes-para-acreditar-logo.jpeg", alt:"ir para o perfil de Razões para Acreditar", username:"razoesparaacreditar"},
    {link:"https://www.instagram.com/adorable___animals/", img:"./assets/img/adorable_animals-logo.jpeg", alt:"ir para o perfil de Adorable Animals", username:"adorable_animals", followYou:true},
    {link:"https://www.instagram.com/smallcutecats/", img:"./assets/img/smallcutecats-logo.jpeg", alt:"ir para o perfil de Small Cute Cats", username:"smallcutecats"}
  ];

  return (
    <div className="suggestions">
      <div className="suggestions-title">
        <h5>Sugestões para você</h5>
        <a href="https://www.instagram.com/explore/people/"><h4>Ver tudo</h4></a>
      </div>
      <ul>
        {profiles.map(profile => <ProfileSuggestion link={profile.link} img={profile.img} alt={profile.alt} username={profile.username} followYou={profile.followYou}/>)}
      </ul>
    </div>
  );
}