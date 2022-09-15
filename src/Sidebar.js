import User from "./User";
import Sugestions from "./Sugestions";

export default function Sidebar() {
  const user = {
    name: "victorazevedo",
    profileName: "Victor Azevedo",
    profilePicture: "./assets/images/profile-victor.jpg",
  };

  return (
    <aside class="sidebar__container">
      <User
        name={user.name}
        profileName={user.profileName}
        profilePicture={user.profilePicture}
      />
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
