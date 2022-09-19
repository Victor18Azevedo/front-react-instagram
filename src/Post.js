import React, { useState } from "react";

export default function Post(props) {
  const iconsLikeType = [
    { name: "heart-outline", class: "icon--medium md hydrated" },
    { name: "heart", class: "icon--medium icon--red md hydrated" },
  ];

  const [likeCount, setLikeCount] = useState(props.likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [iconLike, setIconLike] = useState(iconsLikeType[0]);
  const [isSaved, setIsSaved] = useState(false);
  const [iconSave, setIconSave] = useState("bookmark-outline");

  const refreshLikeCount = () => {
    setIsLiked(isLiked ? false : true);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    setIconLike(isLiked ? iconsLikeType[0] : iconsLikeType[1]);
  };

  const refreshPostSave = () => {
    setIsSaved(isSaved ? false : true);
    setIconSave(isSaved ? "bookmark-outline" : "bookmark");
  };

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
        onClick={refreshLikeCount}
      />
      <div class="post__footer">
        <div class="post__option">
          <ul class="post__option-list">
            <li onClick={refreshLikeCount}>
              <ion-icon name={iconLike.name} class={iconLike.class}></ion-icon>
            </li>
            <li>
              <ion-icon
                name="chatbubble-outline"
                class="icon--medium btn"
              ></ion-icon>
            </li>
            <li>
              <ion-icon
                name="paper-plane-outline"
                class="icon--medium btn"
              ></ion-icon>
            </li>
          </ul>
          <div onClick={refreshPostSave}>
            <ion-icon name={iconSave} class="icon--medium "></ion-icon>
          </div>
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
                {likeCount.toLocaleString("pt-BR")}
              </span>{" "}
              pessoas
            </strong>
          </span>
        </div>
      </div>
    </li>
  );
}
