// import { defaults } from "@pnotify/core";
// import "@pnotify/core/dist/PNotify.css";
// import "@pnotify/core/dist/BrightTheme.css";
// import "@pnotify/core/dist/Material.css";
// // import "material-design-icons/iconfont/material-icons.css";

// (defaults.type = "notice"),
//   (defaults.styling = "brighttheme"),
//   (defaults.icons = "brighttheme"),
//   (defaults.width = "400px"),
//   (defaults.icon = true),
//   (defaults.animateSpeed = "slow"),
//   (defaults.shadow = true),
//   (defaults.hide = true),
//   (defaults.delay = 8000);

import { error, info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

export function onNoCountry() {
  info({
    title: "Error",
    text: "Please enter a more specific query!",
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}

export function onOutputInfo() {
  error({
    title: "Too many matches found",
    text: "Please enter a more specific query!",
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}
