import Sugestion from "./Sugestion";

export default function Sugestions() {
  return (
    <section class="sugestions">
      <div class="sugestion">
        <p class="sugestion-text">Sugestões para você</p>
        <span class="sugestion--contrast">Ver tudo</span>
      </div>
      <Sugestion />
      <Sugestion />
      <Sugestion />
      <Sugestion />
    </section>
  );
}
