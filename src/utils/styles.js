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

export const mediaSizes = {
  mobile: 'max-width: 480px',
  tablet: 'max-width: 768px',
  laptop: 'max-width: 1024px',
  desktop: 'min-width: 1024px',
};

export const mediaQuery = (device, styled) => {
  switch (device) {
    case 'mobile':
      return `@media (min-width: 320px) { ${styled}}`;
    case 'mobilePotrait':
      return `@media (min-width: 320px) and (orientation: potrait) { ${styled}}`;
    case 'mobileLandscape':
      return `@media (min-width: 320px) and (orientation: landscape)  { ${styled}}`;
    case 'tablet':
      return `@media (min-width: 768px) { ${styled}}`;
    case 'desktop':
      return `@media (min-width: 1024px) { ${styled}}`;
    default:
      return '';
  }
};
