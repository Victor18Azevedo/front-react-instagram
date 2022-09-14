import storyCircle from "./assets/stories_background.jpg";
import storyUserPicture from "./assets/profile-9gang.png";

export default function Story() {
  return (
    <div class="story">
      <img src={storyCircle} class="story__circle" alt="Story" />
      <img src={storyUserPicture} class="story__img" alt="Profile Picture" />
      <span class="stories__user">9gang</span>
    </div>
  );
}
