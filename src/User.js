import userPicture from "./assets/profile-img.png";

const userName = "catanacomics";
const userNickName = "Catana";

export default function User() {
  return (
    <div class="user-profile">
      <img src={userPicture} alt="Não foi possível carregar imagem" />
      <div>
        <h2>{userName}</h2>
        <h3>{userNickName}</h3>
      </div>
    </div>
  );
}
