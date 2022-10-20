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
  fontSizeVerySmallMobile: '1rem',
  fontSizeSmallMobile: '1.3rem',
  fontSizeMediumMobile: '1.5rem',
  fontSizeLargeMobile: '2rem',
  fontSizeVeryLargeMobile: '3rem',
  fontSizeVerySmallTablet: '1.5rem',
  fontSizeSmallTablet: '1.7rem',
  fontSizeMediumTablet: '1.9rem',
  fontSizeLargeTablet: '2.1rem',
  fontSizeVeryLargeTablet: '2.3rem',
  fontSizeVerySmallDesktop: '1.7vh',
  fontSizeNormalDesktop: '1.6rem',
  fontSizeSmallDesktop: '2vh',
  fontSizeMediumDesktop: '3vh',
  fontSizeLargeDesktop: '4vh',
  fontSizeVeryLargeDesktop: '5vh',
  // fontSizeVerySmall: '1.7vh',
  // fontSizeSmall: '2vh',
  // fontSizeMedium: '3vh',
  // fontSizeLarge: '4vh',
  // fontSizeVeryLarge: '5vh',
};

export const mediaSizes = {
  mobile: 'min-width: 320px',
  tablet: 'min-width: 768px',
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
