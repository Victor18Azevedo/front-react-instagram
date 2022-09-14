import userPicture from "./assets/profile-img.png";
import Sugestion from "./Sugestion";

const userName = "catanacomics";
const userNickName = "Catana";

export default function Sugestions() {
  return (
    <aside class="sugestions__container">
      <div class="sugestions__header">
        <img src={userPicture} alt="" />
        <div>
          <h2>{userName}</h2>
          <h3>{userNickName}</h3>
        </div>
      </div>
      <div class="sugestions__body">
        <div class="sugestion">
          <h4>Sugestões para você</h4>
          <span>Ver tudo</span>
        </div>
        <Sugestion />
        <Sugestion />
        <Sugestion />
        <Sugestion />
      </div>
      <div class="sugestions__footer">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </aside>
  );
}
