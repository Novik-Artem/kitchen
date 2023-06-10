import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";
import pizza from "../assets/dishes/pizza.webp";
import burger from "../assets/dishes/burger.jpeg";
import rolls from "../assets/dishes/rolls.jpg";
import pasta from "../assets/dishes/pasta.jpeg";
import draniki from "../assets/dishes/draniki.jpg";
import caesar from "../assets/dishes/ceasar.jpg";
import steak from "../assets/dishes/steak.jpg";
////////////////
import nori from "../assets/ingredients/nori.webp";
import fish from "../assets/ingredients/fish.jpg";
import avocado from "../assets/ingredients/avocado.jpg";
import potato from "../assets/ingredients/potato.jpg";
import greenonion from "../assets/ingredients/greenonion.jpg";
import cucumbers from "../assets/ingredients/cucumbers.jpg";
import tomatoes from "../assets/ingredients/tomatoes.webp";
import chicken from "../assets/ingredients/chicken.webp";
import whiteBread from "../assets/ingredients/whiteBread.jpg";
import garlic from "../assets/ingredients/garlic.jpg";
import mushrooms from "../assets/ingredients/mushrooms.webp";
import olives from "../assets/ingredients/olives.jpg";
import dough from "../assets/ingredients/dough.jpg";
import cheese from "../assets/ingredients/cheese.jpg";
import sauce from "../assets/ingredients/sauce.jpeg";
import ham from "../assets/ingredients/ham.jpg";
import pasta2 from "../assets/ingredients/pasta2.jpg";
import meat from "../assets/ingredients/meat.jpg";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    neededCards: [],
    cards: [
      {
        id: uuidv4(),
        title: "pizza",
        image: pizza,
        isOpen: false,
        ingredients: [
          "dough",
          "sauce",
          "tomatoes",
          "mushrooms",
          "ham",
          "cheese",
          "olives",
        ],
      },
      {
        id: uuidv4(),
        title: "burger",
        image: burger,
        isOpen: false,
        ingredients: [
          "white bread",
          "sauce",
          "tomatoes",
          "cucumbers",
          "cheese",
          "meat",
        ],
      },
      {
        id: uuidv4(),
        title: "rolls",
        image: rolls,
        isOpen: false,
        ingredients: ["nori", "fish", "avocado", "cucumbers", "rice"],
      },
      {
        id: uuidv4(),
        title: "pasta",
        image: pasta,
        isOpen: false,
        ingredients: ["pasta", "cheese", "sauce"],
      },
      {
        id: uuidv4(),
        title: "draniki",
        image: draniki,
        isOpen: false,
        ingredients: ["potato", "sauce", "green onion"],
      },
      {
        id: uuidv4(),
        title: "caesar",
        image: caesar,
        isOpen: false,
        ingredients: [
          "chicken",
          "tomatoes",
          "cheese",
          "white bread",
          "sauce",
          "garlic",
        ],
      },
      {
        id: uuidv4(),
        title: "steak",
        image: steak,
        isOpen: false,
        ingredients: ["meat", "sauce", "green onion"],
      },
    ],
    ingredients: [
      {
        id: uuidv4(),
        title: "nori",
        image: nori,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "fish",
        image: fish,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "cheese",
        image: cheese,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "avocado",
        image: avocado,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "potato",
        image: potato,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "green onion",
        image: greenonion,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "cucumbers",
        image: cucumbers,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "tomatoes",
        image: tomatoes,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "chicken",
        image: chicken,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "white bread",
        image: whiteBread,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "garlic",
        image: garlic,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "mushrooms",
        image: mushrooms,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "olives",
        image: olives,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "dough",
        image: dough,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "sauce",
        image: sauce,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "ham",
        image: ham,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "pasta",
        image: pasta2,
        isChosen: false,
      },
      {
        id: uuidv4(),
        title: "meat",
        image: meat,
        isChosen: false,
      },
    ],
    chosenIngredients: [],
  },
  getters: {
    getCards(state) {
      return state.cards;
    },
    getIngredients(state) {
      return state.ingredients;
    },
  },
  mutations: {
    chooseCard(state, id) {
      state.ingredients.map((item) => {
        if (item.id === id) {
          item.isChosen = !item.isChosen;
        }
        let chosenIngredients = state.ingredients.filter(
          (item) => item.isChosen === true
        );
        // @ts-ignore
        state.chosenIngredients = chosenIngredients.map((i) => i.title);
      });
    },
    showNeededCards(state) {
      for (let i = 0; i < state.cards.length; i++) {
        let count = 0;
        if (state.chosenIngredients.length == 0) {
          break;
        }
        for (let j = 0; j < state.chosenIngredients.length; j++) {
          if (state.cards[i].ingredients.includes(state.chosenIngredients[j])) {
            count++;
          }
        }
        if (count == state.chosenIngredients.length) {
          state.neededCards.push(state.cards[i]);
          console.log(state.neededCards);
        }
        count = 0;
      }
      //state.cards = state.neededCards;
    },
    openMenu(state, id) {
      state.cards.map((item) => {
        if (item.id === id) {
          item.isOpen = !item.isOpen;
        }
      });
    },
  },
  actions: {},
  modules: {},
});
