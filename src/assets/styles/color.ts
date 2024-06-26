type Theme = {
  [key: string]: {
    "--primary-color-50": string;
    "--primary-color-100": string;
    "--primary-color-200": string;
    "--primary-color-300": string;
    "--primary-color-400": string;
    "--primary-color-500": string;
    "--primary-color-600": string;
    "--primary-color-700": string;
    "--primary-color-800": string;
    "--primary-color-900": string;
    "--primary-color-950": string;
    "--primary-color": string;
    "--primary-color-export": string;
  };
};

export const Theme: Theme = {
  primary: {
    "--primary-color-50": "#eef2ff",
    "--primary-color-100": "#e0e7ff",
    "--primary-color-200": "#c7d2fe",
    "--primary-color-300": "#a5b4fc",
    "--primary-color-400": "#818cf8",
    "--primary-color-500": "#6366f1",
    "--primary-color-600": "#4f46e5",
    "--primary-color-700": "#4338ca",
    "--primary-color-800": "#3730a3",
    "--primary-color-900": "#312e81",
    "--primary-color-950": "#1e1b4b",
    "--primary-color": "var(--primary-color-600)",
    "--primary-color-export": "#4f46e5",
  },
  brand: {
    "--primary-color-50": "#eff5fe",
    "--primary-color-100": "#e2ecfd",
    "--primary-color-200": "#c4dafa",
    "--primary-color-300": "#a1c6f8",
    "--primary-color-400": "#74b0f5",
    "--primary-color-500": "#2196f3",
    "--primary-color-600": "#1e88dc",
    "--primary-color-700": "#1a78c3",
    "--primary-color-800": "#1766a6",
    "--primary-color-900": "#125183",
    "--primary-color-950": "none",
    "--primary-color": "var(--primary-color-500)",
    "--primary-color-export": "#1e88dc",
  },
  teal: {
    "--primary-color-50": "#f0fdfa",
    "--primary-color-100": "#ccfbf1",
    "--primary-color-200": "#99f6e4",
    "--primary-color-300": "#5eead4",
    "--primary-color-400": "#2dd4bf",
    "--primary-color-500": "#14b8a6",
    "--primary-color-600": "#0d9488",
    "--primary-color-700": "#0f766e",
    "--primary-color-800": "#115e59",
    "--primary-color-900": "#134e4a",
    "--primary-color-950": "#042f2e",
    "--primary-color": "var(--primary-color-600)",
    "--primary-color-export": "#0d9488",
  },
  rose: {
    "--primary-color-50": "#fff1f2",
    "--primary-color-100": "#ffe4e6",
    "--primary-color-200": "#fecdd3",
    "--primary-color-300": "#fda4af",
    "--primary-color-400": "#fb7185",
    "--primary-color-500": "#f43f5e",
    "--primary-color-600": "#e11d48",
    "--primary-color-700": "#be123c",
    "--primary-color-800": "#9f1239",
    "--primary-color-900": "#881337",
    "--primary-color-950": "#4c0519",
    "--primary-color": "var(--primary-color-500)",
    "--primary-color-export": "#f43f5e",
  },

  purple: {
    "--primary-color-50": "#faf5ff",
    "--primary-color-100": "#f3e8ff",
    "--primary-color-200": "#e9d5ff",
    "--primary-color-300": "#d8b4fe",
    "--primary-color-400": "#c084fc",
    "--primary-color-500": "#a855f7",
    "--primary-color-600": "#9333ea",
    "--primary-color-700": "#7e22ce",
    "--primary-color-800": "#6b21a8",
    "--primary-color-900": "#581c87",
    "--primary-color-950": "#3b0764",
    "--primary-color": "var(--primary-color-600)",
    "--primary-color-export": "#9333ea",
  },
  amber: {
    "--primary-color-50": "#fffbeb",
    "--primary-color-100": "#fef3c7",
    "--primary-color-200": "#fde68a",
    "--primary-color-300": "#fcd34d",
    "--primary-color-400": "#fbbf24",
    "--primary-color-500": "#f59e0b",
    "--primary-color-600": "#d97706",
    "--primary-color-700": "#b45309",
    "--primary-color-800": "#92400e",
    "--primary-color-900": "#78350f",
    "--primary-color-950": "#451a03",
    "--primary-color": "var(--primary-color-500)",
    "--primary-color-export": "#f59e0b",
  },
};
