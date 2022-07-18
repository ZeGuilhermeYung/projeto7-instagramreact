export default function MobileHeader() {
  return (
    <div className="mobile-header">
      <a href="https://www.instagram.com/"><ion-icon name="logo-instagram" alt="Logo Instagram"></ion-icon></a>
      <a href="https://www.instagram.com/"><img src="./assets/img/Instagram-Logo.svg" alt="Instagram"/></a>
      <a href="https://www.instagram.com/direct/inbox/">
        <ion-icon className="visible-icon" name="paper-plane-outline" alt="enviar mensagem"></ion-icon>
        <ion-icon className="active-icon" name="paper-plane" alt="enviar mensagem"></ion-icon>
      </a>
    </div>
  );
}