import Sugestion from "./Sugestion";

export default function Sugestions() {
  const sugestions = [
    {
      id: 0,
      name: "bobesponja",
      image: "./assets/images/profile-bob-esponja.png",
    },
    {
      id: 1,
      name: "goku",
      image: "./assets/images/profile-goku.png",
    },
    {
      id: 2,
      name: "bob",
      image: "./assets/images/profile-bob.png",
    },
    {
      id: 3,
      name: "mewtwo",
      image: "./assets/images/profile-mewtwo.png",
    },
  ];

  return (
    <section class="sugestions__box">
      <div class="sugestions__header">
        <p class="sugestion-text">Sugestões para você</p>
        <span class="sugestion--contrast">Ver tudo</span>
      </div>
      <ul class="sugestions__list">
        {sugestions.map((sugestion) => (
          <Sugestion
            key={sugestion.id}
            name={sugestion.name}
            image={sugestion.image}
          />
        ))}
      </ul>
    </section>
  );
}
