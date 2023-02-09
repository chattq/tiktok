export const ImgBasic = (img) => {
  if (img?.includes('users')) {
    return img
  } else {
    return `https://i.pinimg.com/564x/10/0b/fb/100bfbe36c7357a2ccb8a53cd7073d81.jpg`
  }
}
