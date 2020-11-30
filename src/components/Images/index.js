const images = {
  trip: require('../../assets/Trip.png'),
  laptop: require('../../assets/Laptop.png'),
  add: require('../../assets/Add.png'),
  bell: require('../../assets/Bell.png'),
  woman: require('../../assets/Woman.png'),
  percentageTrip: require('../../assets/PercentageTrip.png'),
  percentageLaptop: require('../../assets/PercentageLaptop.png'),
  robot: require('../../assets/Robot.png'),
  skandia: require('../../assets/Skandia.png'),
  left: require('../../assets/Left.png'),
  right: require('../../assets/Right.png'),
  elipse1: require('../../assets/Elipse1.png'),
  elipse2: require('../../assets/Elipse2.png'),
  elipse3: require('../../assets/Elipse3.png'),
  media: require('../../assets/Media.png'),
  play: require('../../assets/Play.png'),
  vector: require('../../assets/Vector.png'),
  expenses1: require('../../assets/Expenses1.png'),
  expenses2: require('../../assets/Expenses2.png'),
  expenses3: require('../../assets/Expenses3.png'),
  home: require('../../assets/Home.png'),
  history: require('../../assets/History.png'),
  saving: require('../../assets/Saving.png'),
  account: require('../../assets/Account.png'),
  more: require('../../assets/More.png'),
  line: require('../../assets/Line.png'),
  background: require('../../assets/Background.png'),
  default: require('../../assets/Laptop.png'), 
}

export const getImg = (image) => {
  let img = images[image];
  if (img === undefined) {
      img = images.default
  }
  return img;
}

export default images;