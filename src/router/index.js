import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Menu from "../pages/Menu.vue";
import About from "../pages/About.vue";
import Gallery from "../pages/Gallery.vue";
import Contact from "../pages/Contact.vue";
import Booking from "../pages/Booking.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return {
      top: 0,
      behavior: "smooth",
    };
  },
});