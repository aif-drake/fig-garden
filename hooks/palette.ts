import { makeColors } from './make-colors.js'

// Sage and cream by day, a kitchen garden at dusk by night.
// Accent is leaf green; tomato, honey, mint and fig carry meaning and colour the code.
export const { theme, problems } = makeColors({
  label: 'Fig garden',
  roles: { accent: '#4a8f52', danger: '#d4503c', success: '#2e9c88', warning: '#c9962e', pro: '#8d5a97' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#eaf0dc',
        'surface-1': '#f1f5e6',
        'surface-2': '#f8faf0',
        'text-primary': '#243020',
        'text-secondary': '#43523a',
        'text-muted': '#56644a',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#18211a',
        'surface-1': '#1e2921',
        'surface-2': '#243026',
        'surface-3': '#28352a',
        'text-primary': '#eff2e1',
        'text-secondary': '#d2d9c2',
        'text-muted': '#b3bea4',
      },
    },
  },
})
