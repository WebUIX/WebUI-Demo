import { toast } from "../assets/kernelsu.js";
import { renderPage } from "./utils.js";

const overlayButton = (type, path) => {
  if (typeof webui.launchOverlay !== "function") {
    toast("Unsupported");
    return;
  }

  const button = document.createElement("button");
  button.className = "btn ripple-element";
  button.textContent = `Open ${type} overlay`;
  // use "su -c 'settings put global maximum_obscuring_opacity_for_touch 1.0'" to increase
  button.onclick = () => webui.launchOverlay(`overlays/${path}`, 0.8);
  return button;
};

const cards = [
  {
    title: "Device Performance",
    sections: [
      { type: "description", content: "Shows your CPU, RAM and FPS usage" },
      { type: "interactive", content: overlayButton("Performance HUD", "device-performance") },
      { type: "code", language: "js", content: `webui.launchOverlay("overlays/device-performance", 0.8)` },
    ],
  },
  {
    title: "Proccess Inspector",
    sections: [
      { type: "description", content: "Manage your current processes" },
      { type: "interactive", content: overlayButton("Proccess HUD", "process-inspector") },
      { type: "code", language: "js", content: `webui.launchOverlay("overlays/process-inspector", 0.8)` },
    ],
  },
];

export function init() {
  renderPage("Overlay", cards);
}
