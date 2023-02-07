export const calculateTimePublish = (createTime) => {
    const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const year = day * 365
  const dateCreate = new Date(createTime).getTime()
  const today = new Date().getTime()
  const timeComment = today - dateCreate
  let timePeriod = ''
  if (timeComment / year > 1) {
    timePeriod = `${Math.floor(timeComment / year)} năm trước`
  } else if (timeComment / day > 1) {
    timePeriod = (timeComment / day) > 6 ? `${new Date(createTime).getDate()} - ${new Date(createTime).getMonth() + 1}` : `${Math.floor(timeComment / day)} ngày trước`
  } else if (timeComment / hour > 1) {
    timePeriod = `${Math.floor(timeComment / hour)} giờ trước`
  } else {
    timePeriod = `${Math.floor(timeComment / minute)} phút trước`
  }
  return timePeriod
}