import sugestionUserPicture from "./assets/profile-joazinho.jpg";

const sugestionUserName = "joaozinho";

export default function Sugestion() {
  return (
    <div class="sugestion">
      <div class="follower__profile">
        <img
          class="follower-img"
          src={sugestionUserPicture}
          alt="Não foi possível carregar imagem"
        />
        <div>
          <p class="follower__name">{sugestionUserName}</p>
          <span class="follower-text">Segue você</span>
        </div>
      </div>
      <p class="follow--contrast">Seguir</p>
    </div>
  );
}
