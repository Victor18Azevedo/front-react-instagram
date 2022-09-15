export default function Sugestion(props) {
  return (
    <li class="sugestion__item">
      <div class="follower__profile">
        <img
          class="follower-img"
          src={props.image}
          alt="Não foi possível carregar imagem"
        />
        <div>
          <p class="follower-name">{props.name}</p>
          <span class="follower-text">Segue você</span>
        </div>
      </div>
      <p class="follow--contrast">Seguir</p>
    </li>
  );
}
