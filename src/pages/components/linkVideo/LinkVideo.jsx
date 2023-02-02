import React from 'react'

export default function LinkVideo({ data }) {
  return (
    <div className='flex w-[100%] overflow-hidden rounded-lg border border-[#1618231f] bg-[#1618230f] text-[#161823bf]'>
      <p className='flex-[1_1_auto] truncate p-[7px_0_5px_12px]'>{data}</p>
      <button className='flex-[0_0_auto] p-[7px_18px] font-[500] hover:bg-[#f8f8f8]'>Sao chep lien ket</button>
    </div>
  )
}
