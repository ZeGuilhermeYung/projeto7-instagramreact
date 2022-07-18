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
    </aside>
  );
}