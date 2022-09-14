import Stories from "./Stories";
import Posts from "./Posts";
import Sugestions from "./Sugestions";

export default function Body() {
  return (
    <div class="main">
      <aside class="main__container">
        <Stories />
        <Posts />
      </aside>
      <aside class="sugestions__container">
        <Sugestions />
      </aside>
    </div>
  );
}
