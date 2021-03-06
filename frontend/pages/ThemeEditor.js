import App from "../components/ThemeEditor.svelte";
import VSCodePreview from "./VSCodePreview.svelte";
import {
  convertToHumanForm,
  formatStylings,
  assignSelectThemeValues,
  resetToDefaultSettings,
  getSelectedColor,
} from "../pages/helpers";
import { defaultThemeSettings } from "./constants";

const app = new App({
  target: document.body,
  props: {
    convertToHumanForm,
    formatStylings,
    defaultThemeSettings,
    assignSelectThemeValues,
    resetToDefaultSettings,
    getSelectedColor,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    VSCodePreview,
  },
});

export default app;
