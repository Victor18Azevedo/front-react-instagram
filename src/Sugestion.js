import sugestionUserPicture from "./assets/profile-joazinho.jpg";

const sugestionUserName = "joaozinho";

export default function Sugestion() {
  return (
    <div class="sugestion">
      <div class="profile__follower">
        <img
          class="follower-img"
          src={sugestionUserPicture}
          alt="Não foi possível carregar iamgem"
        />
        <div>
          <h2 class="follower-name">{sugestionUserName}</h2>
          <span class="follower-text">Segue você</span>
        </div>
      </div>
      <p class="follow">Seguir</p>
    </div>
  );
}
