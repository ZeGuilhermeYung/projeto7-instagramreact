export default function MainHeader() {
  return (
    <div class="main-header">
      <div class="instagram-logos">
        <a href="https://www.instagram.com/"><ion-icon name="logo-instagram" alt="Logo Instagram"></ion-icon></a>
        <div class="linha-vertical"></div>
        <a href="https://www.instagram.com/"><img src="./assets/img/Instagram-Logo.svg" alt="Instagram"/></a>
      </div>
      <div class="pesquisa">
        <a href=""><p>Pesquisar</p></a>   
      </div>
      <div class="opcoes">
        <a href="https://www.instagram.com/direct/inbox/">
          <ion-icon class="icone-padrao" name="paper-plane-outline" alt="enviar mensagem"></ion-icon>
          <ion-icon class="icone-active" name="paper-plane" alt="enviar mensagem"></ion-icon>
          </a>
        <a href="https://www.instagram.com/explore/">
          <ion-icon class="icone-padrao" name="compass-outline" alt="explorar"></ion-icon>
          <ion-icon class="icone-active" name="compass" alt="explorar"></ion-icon>
        </a>
          <a href="https://www.instagram.com/accounts/activity/">
          <ion-icon class="icone-padrao" name="heart-outline" alt="atividades da conta"></ion-icon>
          <ion-icon class="icone-active" name="heart" alt="atividades da conta"></ion-icon>
        </a>
        <a href="https://www.instagram.com/jovemnerd/">
          <ion-icon class="icone-padrao" name="person-outline" alt="meu perfil"></ion-icon>
          <ion-icon class="icone-active" name="person" alt="meu perfil"></ion-icon>
        </a>
      </div>
    </div>
  );
}