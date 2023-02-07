export const FormatTextBold = ({ text }) => {
  const textArr = text.split(' ')
  return (
    <span>
      {textArr.map((item, index) => {
        if (item.startsWith('#')) {
          return <strong className='cursor-pointer hover:underline'>{item} </strong>
        } else {
          return <span>{item} </span>
        }
      })}
    </span>
  )
}
