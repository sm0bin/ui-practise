// const links = [
//     {
//         name: "Home",
//         path: "/",
//         component: <Home />
//     },
//     {
//         name: "About",
//         path: "/about",
//         component: <About />
//     },
//     {
//         name: "Contact",
//         path: "/contact",
//         component: <Contact />
//     },

import One from "../pages/One";
import Two from "../pages/Two";

// ]
export const links = [
  {
    name: "One",
    path: "/One",
    component: <One />,
  },
  {
    name: "Two",
    path: "/Two",
    component: <Two />,
  },
];

export const linkRoutes = links.map((l) => ({
  path: l.path,
  element: l.component,
}));
