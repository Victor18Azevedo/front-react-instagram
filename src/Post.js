export default function Post(props) {
  return (
    <li class="post">
      <div class="post__header">
        <div class="post__profile">
          <img
            class="profile__img"
            src={props.userPicture}
            alt="Não foi possível carregar imagem"
          />
          <h2 class="profile__name">{props.userName}</h2>
        </div>
        <ion-icon name="ellipsis-horizontal" class="icon-medium"></ion-icon>
      </div>
      <img
        class="post__img click"
        src={props.post}
        alt="Não foi possível carregar conteudo"
      />
      <div class="post__footer">
        <div class="post__menu">
          <div>
            <ion-icon
              name="heart-outline"
              class="icon--medium hidden"
            ></ion-icon>
            <ion-icon name="heart" class="icon--medium icon--red"></ion-icon>
            <ion-icon
              name="chatbubble-outline"
              class="icon--medium btn"
            ></ion-icon>
            <ion-icon
              name="paper-plane-outline"
              class="icon--medium btn"
            ></ion-icon>
          </div>
          <ion-icon name="bookmark-outline" class="icon--medium "></ion-icon>
          <ion-icon name="bookmark" class="icon--medium hidden"></ion-icon>
        </div>
        <div class="post__likes">
          <img
            src={props.likePicture}
            alt="Não foi possível carregar imagem"
            class="post__likes-img"
          />
          <span class="post__likes-text">
            Curtido por <strong>{props.likeName}</strong> e
            <strong>
              {" "}
              outras{" "}
              <span className="likes-count">
                {props.likeCount.toLocaleString("pt-BR")}
              </span>{" "}
              pessoas
            </strong>
          </span>
        </div>
      </div>
    </li>
  );
}
