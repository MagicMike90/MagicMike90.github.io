// Helper function to convert pixels to rems
const remy = px => `${px / 16}rem`;

// Function for calculating value for width
const getWidth = (value) => {
  if (!value) return;

  const width = (value / 12) * 100;
  return `width: ${width}%;`;
};

// Function for calculating value for flex
const getFlex = (value) => {
  if (!value) return;

  const flex = (value / 12) * 100;
  return `flex: 0 0 ${flex}%;`;
};

export { remy, getWidth, getFlex };
