import Suggestions from "./SideBar/Suggestions.js";
import OptionsConfig from "./SideBar/OptionsConfig.js";

function MyProfile(props) {
  return (
    <div className="my-profile">
    <a href={props.link}><img src={props.image} alt={props.alt}/></a>
      <div>
          <a href={props.link}><p><h1>{props.username}</h1></p></a>
          <p>{props.title}</p>
      </div>
    </div>
);
}

export default function SideBar() {
  const myProfile = [{link:"https://www.instagram.com/jovemnerd/", image:"./assets/img/Jovem-Nerd.jpg", alt:"ir para perfil do Jovem Nerd", username:"jovemnnerd", title:"Jovem Nerd"}];

  return (
    <aside>
      {myProfile.map(profile => <MyProfile link={profile.link} image={profile.image} alt={profile.alt} username={profile.username} title={profile.title}/>)}
      <Suggestions />
      <OptionsConfig />
    </aside>
  );
}