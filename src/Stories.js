import Story from "./Story";

export default function Stories() {
  const stories = [
    {
      id: 0,
      name: "barked",
      image: "./assets/images/profile-barked.png",
    },
    {
      id: 1,
      name: "nathan",
      image: "./assets/images/profile-nathan.png",
    },
    {
      id: 2,
      name: "fifa",
      image: "./assets/images/profile-fifa.png",
    },
    {
      id: 3,
      name: "joaninha",
      image: "./assets/images/profile-joaninha.jpg",
    },
    {
      id: 4,
      name: "9gang",
      image: "./assets/images/profile-9gang.png",
    },
    {
      id: 5,
      name: "superdad",
      image: "./assets/images/post-dad.jpg",
    },
    {
      id: 6,
      name: "gt7",
      image: "./assets/images/profile-gt7.png",
    },
    {
      id: 7,
      name: "cebolinha",
      image: "./assets/images/profile-cebolinha.jpg",
    },
    {
      id: 8,
      name: "joazinho",
      image: "./assets/images/profile-joazinho.jpg",
    },
  ];

  return (
    <div class="stories__box">
      <ul class="stories__list">
        {stories.map((story) => (
          <Story key={story.id} name={story.name} image={story.image} />
        ))}
        <li></li>
      </ul>
      <ion-icon
        class="btn stories__btn"
        name="chevron-forward-circle"
      ></ion-icon>
    </div>
  );
}
