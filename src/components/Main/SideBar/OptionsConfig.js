function Option(props) {
  return (
    <h6><a href={props.link}>{props.title}</a>` • `</h6>
  );
}
function LastOption(props) {
  return (
    <h6><a href={props.link}>{props.title}</a></h6>
  );
}

export default function OptionsConfig() {
  return (
    <div className="options-configs">
      <p>
        <Option link="https://about.instagram.com/" title="Sobre"/>
        <Option link="https://about.instagram.com/" title="Ajuda"/>
        <Option link="https://about.instagram.com/blog/" title="Imprensa"/>
        <Option link="https://developers.facebook.com/docs/instagram" title="API"/>
        <Option link="https://www.instagram.com/about/jobs/" title="Carreiras"/>
        <Option link="https://www.instagram.com/legal/privacy/" title="Privacidade"/>
        <Option link="https://www.instagram.com/legal/terms/" title="Termos"/>
        <Option link="https://www.instagram.com/explore/locations/" title="Localizações"/>
        <Option link="https://canaltech.com.br/redes-sociais/como-encontrar-contas-interessantes-para-seguir-instagram/" title="Contas mais relevantes"/>
        <Option link="https://www.mafiadomarketing.com.br/blog/hashtags-para-instagram/" title="Hashtags"/>
        <LastOption link="" title="Idioma"/>
      </p>
      <p><h6>© 2021 INSTAGRAM DO FACEBOOK</h6></p>
    </div>
  );
}