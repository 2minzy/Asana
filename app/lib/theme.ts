const deviceSizes = {
  mobileSmall: '320px',
  mobile: '600px',
  tablet: '1024px',
};

const device = {
  mobileSmall: `screen and (max-width: ${deviceSizes.mobileSmall})`,
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
  device,
};

export default theme;
