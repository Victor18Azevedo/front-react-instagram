import userPicture from "./assets/profile-img.png";

const userName = "catanacomics";
const userNickName = "Catana";

export default function User() {
  return (
    <div class="user__profile">
      <img src={userPicture} alt="Não foi possível carregar imagem" />
      <div>
        <p class="user__name">{userName}</p>
        <span class="user__nickname">{userNickName}</span>
        <ion-icon
          class="btn edit__btn icon--mini"
          name="pencil-outline"
        ></ion-icon>
      </div>
    </div>
  );
}
