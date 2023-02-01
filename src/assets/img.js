export const ImgBasic = (img) => {
  if (img?.includes('users')) {
    return img
  } else {
    return `https://cdn-icons-png.flaticon.com/512/475/475219.png`
  }
}
