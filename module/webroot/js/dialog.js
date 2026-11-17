import { renderPage } from "./utils.js";

const dialogButton = (type, message) => {
  const button = document.createElement("button");
  button.className = "btn ripple-element";
  button.textContent = `Open ${type} dialog`;
  button.onclick = () => window[type](message);

  return button;
};

const mxDialogButton = (type, options) => {
  const button = document.createElement("button");
  button.className = "btn ripple-element";
  button.textContent = `Open ${type} dialog`;
  button.onclick = () => webui[type](options);

  return button;
};

const cards = [
  {
    title: "Alert Dialog",
    sections: [
      { type: "description", content: "Show a simple alert dialog." },
      { type: "interactive", content: dialogButton("alert", "Alert dialog demo") },
      { type: "code", language: "js", content: `window.alert('Alert dialog demo');` },
    ],
  },
  {
    title: "Confirm Dialog",
    sections: [
      { type: "description", content: "Ask the user to confirm an action and return a boolean result." },
      { type: "interactive", content: dialogButton("confirm", "Confirm dialog demo") },
      { type: "code", language: "js", content: `const result = window.confirm('Confirm dialog demo');` },
    ],
  },
  {
    title: "Prompt Dialog",
    sections: [
      { type: "description", content: "Ask the user for input and return the result." },
      { type: "interactive", content: dialogButton("prompt", "Prompt dialog demo") },
      { type: "code", language: "js", content: `const result = window.prompt('Prompt dialog demo');` },
    ],
  },
  {
    title: "Confirm Dialog (MX)",
    sections: [
      { type: "description", content: "Ask the user to confirm an action and return a async boolean result." },
      {
        type: "interactive",
        content: mxDialogButton("confirm", { title: "Delete item?", message: "This action cannot be undone.", theme: "md3", buttons: { confirmText: "Delete", cancelText: "Keep" } }),
      },
      {
        type: "code",
        language: "js",
        content: `const ok = await webui.confirm({
  title: "Delete item?",
  message: "This action cannot be undone.",
  buttons: { confirmText: "Delete", cancelText: "Keep" },
  theme: "md3",
});`,
      },
    ],
  },
  {
    title: "Prompt Dialog (MX)",
    sections: [
      { type: "description", content: "Ask the user for input and return the result as async." },
      {
        type: "interactive",
        content: mxDialogButton("prompt", {
          title: "Enter your name",
          message: "Enter it!!",
          default: "",
          launchKeyboard: true,
          buttons: { confirmText: "OK", cancelText: "Skip" },
          theme: "md3",
        }),
      },
      {
        type: "code",
        language: "js",
        content: `const name = await webui.prompt({
  title: "Enter your name",
  message: null,
  default: "",
  launchKeyboard: true,
  buttons: { confirmText: "OK", cancelText: "Skip" },
  theme: "md3",
});`,
      },
    ],
  },
];

export function init() {
  renderPage("Dialog", cards);
}
