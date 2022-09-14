import postUserPicture from "./assets/profile-meowed.png";
import postContents from "./assets/meowed.png";
import postLikeUserPicture from "./assets/profile-respondeai.png";

const postUserName = "meowed";
const postLikeUserName = "respondeai";

export default function Post() {
  return (
    <div class="post">
      <div class="post__header">
        <div class="post__profile">
          <img class="profile-img" src={postUserPicture} alt="" />
          <h2 class="profile-name">{postUserName}</h2>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
      <img
        class="post__img"
        src={postContents}
        alt="Não foi possível carregar iamgem"
      />
      <div class="post__footer">
        <div class="post-menu">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        <div class="post-likes">
          <img
            src={postLikeUserPicture}
            alt="Não foi possível carregar iamgem"
          />
          <p>
            Curtido por <strong>{postLikeUserName}</strong> e
            <strong>outras 101.523 pessoas</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
