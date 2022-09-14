import storyCircle from "./assets/stories_background.jpg";
import storyUserPicture from "./assets/profile-9gang.png";

const storyUserName = "9gang";

export default function Story() {
  return (
    <div class="story">
      <div class="story__box">
        <img
          src={storyUserPicture}
          class="story__img"
          alt="Não foi possível carregar imagem"
        />
        <img src={storyCircle} class="story__circle" alt="Story" />
      </div>
      <span class="story__user">{storyUserName}</span>
    </div>
  );
}
