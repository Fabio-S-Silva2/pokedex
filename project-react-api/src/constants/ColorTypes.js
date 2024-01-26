export const getColor = (type) => {
  switch (type) {
    case "bug":
      return "#316520";
    case "dark":
      return "#5C5365";
    case "dragon":
      return "#0A6CBF";
    case "electric":
      return "#F4d23B";
    case "fighting":
      return "#CE4069";
    case "fire":
      return "#F44900";
    case "flying":
      return "#6892B0";
    case "ghost":
      return "#5269AC";
    case "grass":
      return "#70B873";
    case "ground":
      return "#D97745";
    case "ice":
      return "#74CEC0";
    case "normal":
      return "#8A8A8A";
    case "poison":
      return "#AD61AE";
    case "psychic":
      return "#F67176";
    case "rock":
      return "#C7B78B";
    case "steel":
      return "#FFFFFF";
    case "water":
      return "#33A4F5";
    case "fairy":
      return "#EC8FE6";

    default:
      return "#76a866";
  }
};

export const getColorCard = (type) => {
  switch (type) {
    case "bug":
      return "#76A866";

    case "dark":
      return "#5A5048";
    case "dragon":
      return "#9C4CA7";
    case "electric":
      return "#F0E078";
    case "fighting":
      return "#D86048";
    case "fire":
      return "#EAAB7D";
    case "flying":
      return "#B0C0D8";
    case "ghost":
      return "#705898";
    case "grass":
      return "#729F92";
    case "ground":
      return "#C0A040";
    case "ice":
      return "#D8F0F8";
    case "normal":
      return "#BF9762";
    case "poison":
      return "#B98FB9";
    case "psychic":
      return "#F078B0";
    case "rock":
      return "#B8A050";
    case "steel":
      return "#C0C0D8";
    case "water":
      return "#71C3FF";
    case "fairy":
      return "#F4BDC9";

    default:
      return "#EAAB7D";
  }
};
