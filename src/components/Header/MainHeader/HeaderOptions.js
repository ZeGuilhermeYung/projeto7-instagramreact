export default function HeaderOptions() {
  return (
    <div className="header-options">
      <a href="https://www.instagram.com/direct/inbox/">
        <ion-icon name="paper-plane-outline" alt="enviar mensagem"></ion-icon>
        <ion-icon name="paper-plane" alt="enviar mensagem"></ion-icon>
      </a>
      <a href="https://www.instagram.com/explore/">
        <ion-icon name="compass-outline" alt="explorar"></ion-icon>
        <ion-icon name="compass" alt="explorar"></ion-icon>
      </a>
        <a href="https://www.instagram.com/accounts/activity/">
        <ion-icon name="heart-outline" alt="atividades da conta"></ion-icon>
        <ion-icon name="heart" alt="atividades da conta"></ion-icon>
      </a>
      <a href="https://www.instagram.com/jovemnerd/">
        <ion-icon name="person-outline" alt="meu perfil"></ion-icon>
        <ion-icon name="person" alt="meu perfil"></ion-icon>
      </a>
    </div>
  );
}