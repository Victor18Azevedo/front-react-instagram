export default function Story(props) {
  return (
    <li class="story">
      <div class="story__box">
        <img
          src={props.image}
          class="story__img"
          alt="Não foi possível carregar imagem"
        />
        <img
          src="./assets/images/stories_background.jpg"
          class="story__circle"
          alt="Story"
        />
      </div>
      <span class="story__user">{props.name}</span>
    </li>
  );
}
