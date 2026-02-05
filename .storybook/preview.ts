import type { Preview } from "@storybook/react-vite";
import {
  ThemeDecorator,
  RouterDecorator,
  LanguageDecorator,
} from "../src/shared/config/storybook";

import "../src/app/styles/index.scss";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "App theme",
      defaultValue: "light-theme",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light-theme", title: "Light Theme" },
          { value: "dark-theme", title: "Dark Theme" },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      name: "Locale",
      description: "App locale",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "ua", title: "Ukrainian" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [ThemeDecorator, RouterDecorator, LanguageDecorator],
};

export default preview;
