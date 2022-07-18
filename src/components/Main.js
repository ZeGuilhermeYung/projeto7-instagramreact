import StoriesPosts from "./Main/StoriesPosts.js";
import SideBar from "./Main/SideBar.js";

export default function Main() {
  return (
    <main>
        <StoriesPosts />
        <SideBar />
        
            <div className="opcoes-configuracoes">
                <p>
                    <h6><a href="https://about.instagram.com/">Sobre</a> • <a href="https://help.instagram.com/">Ajuda</a> • <a href="https://about.instagram.com/blog/">Imprensa</a> • <a href="https://developers.facebook.com/docs/instagram">API</a> • <a href="https://www.instagram.com/about/jobs/">Carreiras</a> • <a href="https://www.instagram.com/legal/privacy/">Privacidade</a> •
                        <a href="https://www.instagram.com/legal/terms/">Termos</a> • <a href="https://www.instagram.com/explore/locations/">Localizações</a> • <a href="https://canaltech.com.br/redes-sociais/como-encontrar-contas-interessantes-para-seguir-instagram/">Contas mais relevantes</a> • <a href="https://www.mafiadomarketing.com.br/blog/hashtags-para-instagram/">Hashtags</a> • 
                        <a href="">Idioma</a></h6>
                </p>
                <p><h6>© 2021 INSTAGRAM DO FACEBOOK</h6></p>
            </div>
    </main>
  );
}