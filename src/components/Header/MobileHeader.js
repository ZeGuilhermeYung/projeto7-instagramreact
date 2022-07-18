export default function MobileHeader() {
  return (
    <div class="cabecalho-mobile">
      <a href="https://www.instagram.com/"><ion-icon name="logo-instagram" alt="Logo Instagram"></ion-icon></a>
      <a href="https://www.instagram.com/"><img src="./assets/img/Instagram-Logo.svg" alt="Instagram"/></a>
      <a href="https://www.instagram.com/direct/inbox/">
        <ion-icon class="icone-padrao" name="paper-plane-outline" alt="enviar mensagem"></ion-icon>
        <ion-icon class="icone-active" name="paper-plane" alt="enviar mensagem"></ion-icon>
      </a>
    </div>
  );
}