import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  // Brand Colors
  primary: '#EFF8FF',
  brand: '#0F9AFE',

  // Dark Scale
  dark10: '#293145',
  dark20: '#6E7275',
  dark30: '#DBDBDB',
  dark40: '#FFFFFF',

  // Color System
  message: '#2962FF',
  success: '#0BB07B',
  warning: '#FFCE52',
  error: '#F03D3D',
  information: '#E0E0E0',
});

export const fonts = stylex.defineVars({
  primary: 'Sora, system-ui, sans-serif',
  secondary: 'Inter, system-ui, sans-serif',
});
