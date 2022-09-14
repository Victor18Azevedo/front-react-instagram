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
          <img
            class="profile__img"
            src={postUserPicture}
            alt="Não foi possível carregar imagem"
          />
          <h2 class="profile__name">{postUserName}</h2>
        </div>
        <ion-icon name="ellipsis-horizontal" class="icon-medium"></ion-icon>
      </div>
      <img
        class="post__img"
        src={postContents}
        alt="Não foi possível carregar conteudo"
      />
      <div class="post__footer">
        <div class="post__menu">
          <div>
            <ion-icon name="heart-outline" class="icon--medium"></ion-icon>
            <ion-icon name="chatbubble-outline" class="icon--medium"></ion-icon>
            <ion-icon
              name="paper-plane-outline"
              class="icon--medium"
            ></ion-icon>
          </div>
          <ion-icon name="bookmark-outline" class="icon--medium"></ion-icon>
        </div>
        <div class="post__likes">
          <img
            src={postLikeUserPicture}
            alt="Não foi possível carregar imagem"
            class="post__likes-img"
          />
          <span class="post__likes-text">
            Curtido por <strong>{postLikeUserName}</strong> e
            <strong>
              outras <span className="likes-count">101.523</span> pessoas
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
}
