import Sugestions from "./SideBar/Sugestions.js";

export default function SideBar() {
  return (
    <aside>
      <div className="my-profile">
          <a href="https://www.instagram.com/jovemnerd/"><img src="./assets/img/Jovem-Nerd.jpg" alt="ir para perfil do Jovem Nerd"/></a>
          <div>
              <a href="https://www.instagram.com/jovemnerd/"><p><h1>jovemnnerd</h1></p></a>
              <p>Jovem Nerd</p>
          </div>
      </div>
      <Sugestions />
      <div className="options-configs">
        <p>
          <h6>
            <a href="https://about.instagram.com/">Sobre</a> • <a href="https://help.instagram.com/">Ajuda</a> • <a href="https://about.instagram.com/blog/">Imprensa</a> • <a href="https://developers.facebook.com/docs/instagram">API</a> • <a href="https://www.instagram.com/about/jobs/">Carreiras</a> • <a href="https://www.instagram.com/legal/privacy/">Privacidade</a> •
            <a href="https://www.instagram.com/legal/terms/">Termos</a> • <a href="https://www.instagram.com/explore/locations/">Localizações</a> • <a href="https://canaltech.com.br/redes-sociais/como-encontrar-contas-interessantes-para-seguir-instagram/">Contas mais relevantes</a> • <a href="https://www.mafiadomarketing.com.br/blog/hashtags-para-instagram/">Hashtags</a> • 
            <a href="">Idioma</a>
          </h6>
        </p>
        <p><h6>© 2021 INSTAGRAM DO FACEBOOK</h6></p>
      </div>
    </aside>
  );
}