/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "girlStyle" : " linear-gradient(to bottom , rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)) , url('./img/girlStyle.jpg')",
        "jewelery" : " linear-gradient(to bottom , rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)) , url('./img/jewelery.jpg')",
        "menStyle" : " linear-gradient(to bottom , rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)) , url('./img/menStyle.jpg')",

        "phone" : "linear-gradient(to bottom , rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)), url('./img/phone.jpg')",
        "Shoes" : "linear-gradient(to bottom , rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)), url('./img/Shoes.jpg')",
        "laptop" : "linear-gradient(to bottom , rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)), url('./img/laptop.jpg')",
        "sunglasses" : "linear-gradient(to bottom , rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)), url('./img/sunglasses.jpg')",        
      }
    },
  },
  plugins: [],
}
