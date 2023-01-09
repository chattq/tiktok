import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'
import { rules } from '../../../../rules/Rules'
function SignUpWithEmail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className='mt-[80px] w-full'>
      <div className='mx-auto flex w-[375px] flex-col'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className='my-4 text-center text-[32px] font-bold text-[#161823] '>Sign up </h1>
          <div className='mb-[5px] text-fontSizeName font-semibold text-tiktokColorText'>Email </div>
          <input
            className='mb-[9px] h-[44px] w-full rounded-sm border border-[#1618231f] bg-[#1618230f] pl-3 text-[16px] caret-tiktokPink outline-none'
            placeholder='Email or username'
            {...register('email', rules.email)}
          />
          <p className='h-[17px] text-fontSizeMin text-tiktokPink'> {errors.email?.message}</p>
          <input
            className='mb-[9px] h-[44px] w-full rounded-sm border border-[#1618231f] bg-[#1618230f] pl-3 text-[16px] caret-tiktokPink outline-none'
            placeholder='password'
            name='password'
            {...register('password', rules.password)}
          />
          <p className='h-[17px] text-fontSizeMin text-tiktokPink'> {errors.password?.message}</p>
          <button className='mt-[21px] min-h-[46px] w-full min-w-[120px] rounded bg-[#fe2c55] text-[white]'>
            Sign up
          </button>
        </form>

        <Link to={'/signup'} className='mt-[40px] flex w-full items-center justify-center text-fontSizeTitle'>
          <FontAwesomeIcon icon={faAngleLeft} className='mr-1' />
          Go back
        </Link>
      </div>
      <div className='fixed bottom-0  right-1  mx-auto flex w-full flex-col border-[#f1f1f2]'>
        <div className='flex w-full items-center justify-center bg-white px-[30px] py-4 text-fontSizeName'>
          <p className='w-[375px] text-center text-fontSizeMin text-[#16182380]'>
            By continuing, you agree to TikTok’s Terms of Service and confirm that you have read TikTok’s Privacy
            Policy.
          </p>
        </div>
        <div className='flex h-16 w-full items-center justify-center border-t bg-white text-fontSizeName'>
          Already have an account?
          <Link to={'/login'}>
            <span className='ml-1 inline-block font-medium text-tiktokPink hover:underline'> Log in</span>
          </Link>
        </div>
        <div className='flex h-[84px] cursor-pointer items-center justify-between bg-black px-[144px] text-white'>
          <div className='flex h-[36px] w-[172px] items-center rounded-sm border border-[#8a8b91] px-4 text-fontSizeTitle '>
            English
          </div>
          <span className='text-fontSizeTitle font-medium text-[#8a8b91]'>© 2023 TikTok</span>
        </div>
      </div>
    </div>
  )
}

export default SignUpWithEmail
