import HeaderOptions from "./MainHeader/HeaderOptions.js";

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
      <HeaderOptions />
    </div>
  );
}