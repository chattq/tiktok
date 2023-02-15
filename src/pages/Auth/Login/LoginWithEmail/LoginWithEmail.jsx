import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faQrcode, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { rules } from '../../../../rules/Rules'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Account } from '../../../../apis/AcountAPI'

function LoginWithEmail() {
  const [loginfail, setLoginFail] = useState(false)
  const [loadding, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    setLoading(true)
    Account.getLogin(data.email, data.password)
      .then((res) => {
        setLoginFail(false)
        setLoading(false)
        reset()
        localStorage.setItem('token', JSON.stringify(res.data.meta.token))
        localStorage.setItem('userInfo', JSON.stringify(res.data.data))

        toast.success(
          <>
            <FontAwesomeIcon icon={faTiktok} />
            <span className='ml-[5px]'>Đăng nhập thành công</span>
          </>,
          {
            position: 'top-right',
            autoClose: 2000,
            theme: 'light'
          }
        )
        setTimeout(() => {
          window.location.assign('/')
        }, 3000)
      })
      .catch((error) => {
        console.log(error)
        setLoginFail(true)
        setLoading(false)
      })
  }
  return (
    <>
      <ToastContainer />
      <div className='mt-[80px] w-full'>
        <div className='mx-auto flex w-[375px] flex-col'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='my-4 text-center text-[32px] font-bold text-[#161823] '>Log in </h1>
            <label className='mb-[5px] text-fontSizeName font-semibold text-tiktokColorText'>Email or userName</label>
            <input
              className='mb-[9px] h-[44px] w-full rounded-sm border border-[#1618231f] bg-[#1618230f] pl-3 text-[16px] caret-tiktokPink outline-none'
              placeholder='Email or username'
              {...register('email', rules.email)}
            />
            <p className='h-[17px] text-fontSizeMin text-tiktokPink'>{errors.email?.message}</p>
            <input
              placeholder='Password'
              className='mb-[9px] h-[44px] w-full rounded-sm border border-[#1618231f] bg-[#1618230f] pl-3 text-[16px] caret-tiktokPink outline-none'
              {...register('password', rules.password)}
            />
            <p className='h-[17px] text-fontSizeMin text-tiktokPink'>{errors.password?.message}</p>
            <p className='text-fontSizeMin font-semibold text-[#161823bf]'>Forgot Password ?</p>
            {loginfail && (
              <p className='mt-2 h-[17px] text-fontSizeMin text-tiktokPink'>Email hoặc mật khẩu ko chính xác</p>
            )}
            <button className='relative mt-[21px] min-h-[46px] w-full min-w-[120px] rounded bg-[#fe2c55] text-[white]'>
              {loadding && (
                <div role='status' className='absolute top-2/4 left-[140px] -translate-y-1/2'>
                  <svg
                    aria-hidden='true'
                    class='mr-2 h-5 w-5 animate-spin fill-tiktokPink text-gray-200 dark:text-gray-600'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
                    />
                  </svg>
                </div>
              )}
              Login
            </button>
          </form>
          <Link to={'/login'} className='mt-[40px] flex w-full items-center justify-center text-fontSizeTitle'>
            <FontAwesomeIcon icon={faAngleLeft} className='mr-1' />
            Go back
          </Link>
        </div>
        <div className='fixed bottom-0  right-1 mx-auto flex w-full flex-col border-t border-[#f1f1f2]'>
          <div className='flex h-16 w-full items-center justify-center bg-white'>
            Don’t have an account?
            <Link to={'/signup'}>
              <span className='ml-1 inline-block font-medium text-tiktokPink hover:underline'> Sign up</span>
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
    </>
  )
}

export default LoginWithEmail
