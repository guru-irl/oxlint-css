// Example CSS definition objects for linting

// @css
const validStyle = {
  color: "red",
  backgroundColor: "#fff",
  fontSize: "16px",
  margin: "10px",
};

// @css - contains intentional lint errors
const badStyle = {
  color: "red",
  color: "blue", // duplicate property
  backgroundColor: "#gggggg", // invalid hex color
  fontSize: "16pxx", // unknown unit
};

export { validStyle, badStyle };
