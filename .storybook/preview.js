import "../src/styles/sds.css";
import "react-tooltip/dist/react-tooltip.css";

import React from 'react';

export const decorators = [
  (Story) => (
    <div className={"sds--page-container sds--color-palette--orange"}>
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
 backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F8F8F8',
      },
      {
        name: 'dark',
        value: '#4b4c54',
      },
      {
        name: 'blue',
        value: '#0077c8',
      },
    ],
  },
}