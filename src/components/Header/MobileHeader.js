import IconsClick from "../IconsClick";

export default function MobileHeader() {
  return (
    <div className="mobile-header">
      <a href="https://www.instagram.com/"><ion-icon name="logo-instagram" alt="Logo Instagram"></ion-icon></a>
      <a href="https://www.instagram.com/"><img src="./assets/img/Instagram-Logo.svg" alt="Instagram"/></a>
      <IconsClick link="https://www.instagram.com/direct/inbox/" visibleIcon="paper-plane-outline" activeIcon="paper-plane" alt="enviar mensagem"/>
    </div>
  );
}