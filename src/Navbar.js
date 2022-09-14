import logo from "./assets/logo.png";

export default function Navbar() {
  return (
    <header class="navbar">
      <div class="navbar__container">
        <div class="navbar__logo--desktop">
          <ion-icon
            name="logo-instagram"
            class="logo-icon icon--large"
          ></ion-icon>
          <img src={logo} alt="Logo do Instagram" class="logo-img" />
        </div>
        <div class="navbar__logo--mobile">
          <ion-icon name="logo-instagram" class="icon--large"></ion-icon>
        </div>
        <div class="navbar__search--desktop">
          <input
            class="nvbar__search-input"
            type="search"
            placeholder="Pesquisar"
          />
        </div>
        <div class="navbar__logo--center">
          <img src={logo} alt="Logo do Instagram" class="logo-img" />
        </div>
        <nav class="navbar__menu--desktop">
          <ion-icon name="paper-plane-outline" class="icon--large"></ion-icon>
          <ion-icon name="compass-outline" class="icon--large"></ion-icon>
          <ion-icon name="heart-outline" class="icon--large"></ion-icon>
          <ion-icon name="person-outline" class="icon--large"></ion-icon>
        </nav>
        <div class="navbar__menu--mobile">
          <ion-icon name="paper-plane-outline" class="icon--large"></ion-icon>
        </div>
      </div>
    </header>
  );
}
