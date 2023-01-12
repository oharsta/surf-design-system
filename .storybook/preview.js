import "../src/styles/sds.css";

import React from 'react';

export const decorators = [
  (Story) => (
    <div className={"sds--page-container sds--color-palette--blue"}>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}