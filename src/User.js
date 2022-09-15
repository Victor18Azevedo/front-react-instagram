export default function User(props) {
  return (
    <div class="user__profile">
      <img
        src={props.profilePicture}
        class="user__picture"
        alt="Não foi possível carregar imagem"
      />
      <div>
        <p class="user__name">{props.name}</p>
        <span class="user__nickname">{props.profileName}</span>
        <ion-icon class="edit__btn icon--mini" name="pencil-outline"></ion-icon>
      </div>
    </div>
  );
}
