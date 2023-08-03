import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !isIphoneWithNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};
function isIphoneWithNotch() {
  const dimension = Dimensions.get('window');
  return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTV &&
      (dimension.height === 780 ||
          dimension.width === 780 ||
          dimension.height === 812 ||
          dimension.width === 812 ||
          dimension.height === 844 ||
          dimension.width === 844 ||
          dimension.height === 896 ||
          dimension.width === 896 ||
          dimension.height === 926 ||
          dimension.width === 926
      )
  );
}

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};
const horizontalScale = size => (width / guidelineBaseWidth()) * size;
const verticalScale = size => (height / guidelineBaseHeight()) * size;
const fontScale = size => Math.round(size * width) / guidelineBaseFonts();

export {horizontalScale, verticalScale, fontScale};
