interface Size {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  laptop: string;
  laptopL: string;
  desktop: string;
}
const size: Size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width:${size.mobileS}) (min-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
};
