export default function HeaderOptions() {
  return (
    <div className="header-options">
      <a href="https://www.instagram.com/direct/inbox/">
        <ion-icon className="visible-icon" name="paper-plane-outline" alt="enviar mensagem"></ion-icon>
        <ion-icon className="active-icon" name="paper-plane" alt="enviar mensagem"></ion-icon>
      </a>
      <a href="https://www.instagram.com/explore/">
        <ion-icon className="visible-icon" name="compass-outline" alt="explorar"></ion-icon>
        <ion-icon className="active-icon" name="compass" alt="explorar"></ion-icon>
      </a>
        <a href="https://www.instagram.com/accounts/activity/">
        <ion-icon className="visible-icon" name="heart-outline" alt="atividades da conta"></ion-icon>
        <ion-icon className="active-icon" name="heart" alt="atividades da conta"></ion-icon>
      </a>
      <a href="https://www.instagram.com/jovemnerd/">
        <ion-icon className="visible-icon" name="person-outline" alt="meu perfil"></ion-icon>
        <ion-icon className="active-icon" name="person" alt="meu perfil"></ion-icon>
      </a>
    </div>
  );
}