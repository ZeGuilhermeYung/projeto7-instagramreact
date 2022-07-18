import IconsClick from "../IconsClick.js";

export default function MainHeader() {
  return (
    <div className="main-header">
      <div className="instagram-logos">
        <a href="https://www.instagram.com/"><ion-icon name="logo-instagram" alt="Logo Instagram"></ion-icon></a>
        <div className="linha-vertical"></div>
        <a href="https://www.instagram.com/"><img src="./assets/img/Instagram-Logo.svg" alt="Instagram"/></a>
      </div>
      <div className="search">
        <input type="text" placeholder="Pesquisar"/>   
      </div>
        <div className="header-options">
        <IconsClick link="https://www.instagram.com/direct/inbox/" visibleIcon="paper-plane-outline" activeIcon="paper-plane" alt="enviar mensagem"/>
        <IconsClick link="https://www.instagram.com/explore/" visibleIcon="compass-outline" activeIcon="compass" alt="explorar"/>
        <IconsClick link="https://www.instagram.com/accounts/activity/" visibleIcon="heart-outline" activeIcon="heart" alt="atividades da conta"/>
        <IconsClick link="https://www.instagram.com/jovemnerd/" visibleIcon="person-outline" activeIcon="person" alt="meu perfil"/>
      </div>
    </div>
  );
}