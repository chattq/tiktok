export const FormatTextBold = ({ text }) => {
  const textArr = text.split(' ')
  return (
    <span>
      {textArr.map((item, index) => {
        if (item.startsWith('#')) {
          return (
            <strong key={index} className='cursor-pointer hover:underline'>
              {item}{' '}
            </strong>
          )
        } else {
          return <span key={index}>{item} </span>
        }
      })}
    </span>
  )
}
