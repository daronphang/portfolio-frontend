// https://colorhunt.co/palettes/grey

export const standardStyles = {
  colorPrimary: 'rgb(20, 20, 20)',
  colorSecondary: '#F5A539',
  colorTertiary: '#D9CAB3',
  colorQuaternary: '#F6F6F6',
  colorQuinary: '#ffffff',
  fontColorPrimary: '#ffffff',
  fontColorSecondary: '#333333',
  fontSizeVerySmall: '1.0rem',
  fontSizeSmall: '1.3rem',
  fontSizeNormal: '1.6rem',
  fontSizeMedium: '2rem',
  fontSizeLarge: '3rem',
  fontSizeVeryLarge: '4rem',
};

export const mediaQuery = (device, styled) => {
  switch (device) {
    case 'mobile':
      return `@media (min-width: 320px) { ${styled}}`;
    case 'tablet':
      return `@media (min-width: 480px) { ${styled}}`;
    case 'laptop':
      return `@media (min-width: 768px) { ${styled}}`;
    case 'desktop':
      return `@media (min-width: 1024px) { ${styled}}`;
    default:
      return '';
  }
};

export const mediaSizes = {
  mobile: '320px',
  tablet: '480px',
  laptop: '768px',
  desktop: '1024px',
};
