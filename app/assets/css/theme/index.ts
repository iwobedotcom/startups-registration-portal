const theme = {
  colors: {
    transparent: "transparent !important",
    primary: "#007a27",
    secondary: "",
    background: "",
    white: "#ffffff",
    text: "#333",
    gradient: "",
  },
  fontSize: {
    body: "18px",
    h1: ["30px", "38px", "38px", "50px", "60px", "75px"],
    h2: ["25px", "30px", "36px", "40px", "50px"],
    h3: ["22px", "24px", "38px"],
    h4: ["20px", "22px", "30px"],
    h5: ["18px", "20px", "24px"],
    h6: ["16px", "18px"],
  },
  fonts: {
    body: `inherit`,
    heading: `inherit`,
    secondary: `inherit`,
    primary: `inherit`,
  },
  fontWeights: {
    body: 400,
    heading: 400,
  },
  lineHeights: {
    body: 2,
    heading: 1.35,
  },
  radii: {
    default: "4px",
    sm: "3px",
    md: "6px",
    lg: "8px",
    round: "50%",
    pill: "500px",
  },
  shadows: {
    default: "0 0 12px 3px rgba(0, 0, 0, 0.06)",
    sm: "0px -1px 1px 0px rgba(0,0,0, .2)",
    lg: "0 1rem 3rem rgba(0, 0, 0, .175)",
  },
  breakpoints: ["576px", "768px", "992px", "1200px", "1400px"],
  transition: "all 0.4s ease 0s",
  text: {
    caps: {
      textTransform: "uppercase",
    },
    small: {
      fontSize: "14px",
      fontWeight: 600,
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      color: "text",
      fontSize: "body",
    },
  },
};

export default theme;
