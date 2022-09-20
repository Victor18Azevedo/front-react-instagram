import React, { useState } from "react";

export default function User(props) {
  const [profileName, setProfileName] = useState(props.profileName);
  const [profilePicture, setProfilePicture] = useState(props.profilePicture);

  const changeProfileName = () => {
    let name = prompt("Digite o novo nome do Perfil");
    setProfileName(!name ? props.profileName : name);
  };

  const changeProfilePicture = () => {
    let img = prompt("Insira a URL da Foto de Pefil");
    setProfilePicture(!img ? props.profilePicture : img);
  };

  return (
    <div class="user__profile">
      <img
        src={profilePicture}
        class="user__picture"
        alt="Não foi possível carregar imagem"
        onClick={changeProfilePicture}
      />
      <div class="user__profile-text">
        <p class="user__name">{props.name}</p>
        <span class="user__nickname">{profileName}</span>
        <ion-icon
          class="edit__btn icon--mini"
          name="pencil-outline"
          onClick={changeProfileName}
        ></ion-icon>
      </div>
    </div>
  );
}
