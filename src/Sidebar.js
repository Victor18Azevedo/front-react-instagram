import User from "./User";
import Sugestions from "./Sugestions";

export default function Sidebar() {
  return (
    <aside class="sidebar__container">
      <User />
      <Sugestions />
      <div class="sidebar__footer">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>Inpirado no INSTAGRAM DO FACEBOOK ©</p>
      </div>
    </aside>
  );
}
