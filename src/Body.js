import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Body() {
  return (
    <div class="body">
      <aside class="main__container">
        <Stories />
        <Posts />
      </aside>
      <Sidebar />
    </div>
  );
}
