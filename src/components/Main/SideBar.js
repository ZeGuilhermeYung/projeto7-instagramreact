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
      <div className="sugestoes">
          <div className="sugestoes-titulo">
              <h5>Sugestões para você</h5>
              <a href="https://www.instagram.com/explore/people/"><h4>Ver tudo</h4></a>
          </div>
          <ul>
              <li>
                  <div className="sugestoes-perfis">
                      <a href="https://www.instagram.com/grandesnomesdaarquitetura/"><img src="./assets/img/arquitetura.svg" alt="ir para o perfil de Grandes nomes da Arquitetura"/></a>
                      <div>
                          <a href="https://www.instagram.com/grandesnomesdaarquitetura/"><p><h1>grandesnomesdaarquitetura</h1></p></a>
                          <p><h5>Segue você</h5></p>
                      </div>
                  </div>
                  <a href=""><h3>Seguir</h3></a>
              </li>
              <li>
                  <div className="sugestoes-perfis">
                      <a href="https://www.instagram.com/chibirdart/"><img src="./assets/img/chibirdart-logo.jpeg" alt="ir para o perfil de chibirdart"/></a>
                      <div>
                          <a href="https://www.instagram.com/chibirdart/"><p><h1>chibirdart</h1></p></a>
                          <p><h5>Segue você</h5></p>
                      </div>
                  </div>
                  <a href=""><h3>Seguir</h3></a>
              </li>
              <li>
                  <div className="sugestoes-perfis">
                      <a href="https://www.instagram.com/razoesparaacreditar/"><img src="./assets/img/razoes-para-acreditar-logo.jpeg" alt="ir para o perfil de Razões para Acreditar"/></a>
                      <div>
                          <a href="https://www.instagram.com/razoesparaacreditar/"><p><h1>razoesparaacreditar</h1></p></a>
                          <p><h5>Novo no Instagram</h5></p>
                      </div>
                  </div>
                  <a href=""><h3>Seguir</h3></a>
              </li>
              <li>
                  <div className="sugestoes-perfis">
                      <a href="https://www.instagram.com/adorable___animals/"><img src="./assets/img/adorable_animals-logo.jpeg" alt="ir para o perfil de Adorable Animals"/></a>
                      <div>
                          <a href="https://www.instagram.com/adorable___animals/"><p><h1>adorable_animals</h1></p></a>
                          <p><h5>Segue você</h5></p>
                      </div>
                  </div>
                  <a href=""><h3>Seguir</h3></a>
              </li>
              <li>
                  <div className="sugestoes-perfis">
                      <a href="https://www.instagram.com/smallcutecats/"><img src="./assets/img/smallcutecats-logo.jpeg" alt="ir para o perfil de Small Cute Cats"/></a>
                      <div>
                          <a href="https://www.instagram.com/smallcutecats/"><p><h1>smallcutecats</h1></p></a>
                          <p><h5>Segue você</h5></p>
                      </div>
                  </div>
                  <a href=""><h3>Seguir</h3></a>
              </li>
          </ul>
        </div>
    </aside>
  );
}