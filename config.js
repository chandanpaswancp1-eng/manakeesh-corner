/**
 * Manakeesh Corner — link page settings
 * Edit this file, save, and refresh. Leave a value as "" to hide that button.
 * Do not add offers, ratings, or links that have not been confirmed.
 */
window.MANAKEESH = {
  name: "Manakeesh Corner",
  tagline: "Your favourites, one click away.",
  logo: "logo.jpg",
  hero: "food/spread.jpg",
  heroAlt: "Manakeesh, wraps, burgers and sides",

  /* Optional. Leave blank to hide the offer strip. */
  offer: "",

  /* Optional. Paste a GA4 measurement ID (G-XXXX) to track visits in Google Analytics. */
  gaMeasurementId: "",

  instagram: "https://www.instagram.com/manakeeshcorneruae/",
  facebook: "",

  /* Shared buttons. A branch can override maps, phone, or menu. */
  menu: "",
  phone: "",

  /**
   * One object per branch. With a single branch, ordering buttons show immediately.
   * Add another object to show a branch picker first.
   * Platform keys: direct, talabat, deliveroo, careem, noon, whatsapp
   */
  branches: [
    {
      id: "motor-city",
      name: "Motor City",
      maps: "https://www.google.com/maps?q=25.043361,55.2295",
      mapsLabel: "25°02'36.1\"N 55°13'46.2\"E",
      phone: "",
      menu: "",
      links: {
        direct: "",
        talabat: "https://www.talabat.com/uae/mankeesh-corner-motor-city",
        deliveroo: "https://deliveroo.ae/menu/dubai/motor-city/manakeesh-corner-sports-city?utm_campaign=organic&utm_medium=referrer&utm_source=menu_share",
        careem: "https://link.careem.com/0GyUhNgoBE6ik",
        noon: "https://food.noon.com/en-ae/outlet/MNKSHCF902",
        whatsapp: ""
      }
    }
  ]
};
