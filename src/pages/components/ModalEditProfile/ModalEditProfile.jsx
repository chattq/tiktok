import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Button, Modal } from 'antd'
import { useForm } from 'react-hook-form'
import { rules } from '../../../rules/rules'
import { User } from '../../../apis/UserAPI'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import { CloseX, EditAvatar } from '../../../Icons/Icons'
import { ImgBasic } from '../../../assets/img'
import { Account } from '../../../apis/AcountAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../../context/app.context'
import { useTranslation } from 'react-i18next'

export default function ModalEditProfile({ children, style }) {
  const { t } = useTranslation()
  const { setDataUser } = useContext(AppContext)
  const token = JSON.parse(localStorage.getItem('token'))
  const { userId } = useParams()
  const queryClient = useQueryClient()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const fileInput = useRef(null)
  const [file, setFile] = useState()
  const { data: dataProfile, refetch } = useQuery({
    queryKey: ['/auth/me'],
    queryFn: User.me
  })
  const previewImg = useMemo(() => {
    return file ? URL.createObjectURL(file) : ''
  }, [file])
  const profile = dataProfile?.data.data
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      last_name: '',
      avatar: '',
      first_name: '',
      bio: '',
      website_url: '',
      facebook_url: ''
    }
  })
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  useEffect(() => {
    if (profile) {
      setValue('last_name', profile.last_name)
      setValue('avatar', profile.avatar)
      setValue('first_name', profile.first_name)
      setValue('bio', profile.bio)
      setValue('website_url', profile.website_url)
      setValue('facebook_url', profile.facebook_url)
    }
  }, [profile, setValue])
  const onSubmit = handleSubmit(async (data) => {
    try {
      var formData = new FormData()
      if (typeof data.avatar !== 'string') {
        formData.append('avatar', data.avatar)
      }
      if (file) {
        formData.append('avatar', file)
      }
      formData.append('last_name', data.last_name)
      formData.append('first_name', data.first_name)
      formData.append('bio', data.bio)
      formData.append('website_url', data.website_url)
      formData.append('facebook_url', data.facebook_url)
      axios
        .post('https://tiktok.fullstack.edu.vn/api/auth/me?_method=PATCH', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token} `
          }
        })
        .then((res) => {
          setDataUser(res.data.data)
          localStorage.setItem('userInfo', JSON.stringify(res.data.data))
          queryClient.invalidateQueries({ queryKey: [`/api/users/@`, userId] })
          toast.success(
            <>
              <FontAwesomeIcon icon={faTiktok} />
              <span className='ml-[5px]'>Upload thành công</span>
            </>,
            {
              position: 'top-right',
              autoClose: 2000,
              theme: 'light'
            }
          )
        })
        .catch((error) => {
          console.log(error)
          toast.error(
            <>
              <FontAwesomeIcon icon={faTiktok} />
              <span className='ml-[5px]'>Upload thất bại</span>
            </>,
            {
              position: 'top-right',
              autoClose: 2000,
              theme: 'light'
            }
          )
        })
    } catch (error) {
      console.log(error)
    }
  })
  const maxSizeUploadImg = 5 * 1048576
  const onFileChange = (event) => {
    const fileFromLocal = event.target.files?.[0]
    fileInput.current?.setAttribute('value', '')
    if (fileFromLocal && (fileFromLocal?.size >= maxSizeUploadImg || !fileFromLocal.type.includes('image'))) {
      toast.warning(`Dung lượng file tối đa 5MB, Định dạng:.JPEG, .PNG`)
    } else {
      setFile(fileFromLocal)
      // setValue('avatar', fileFromLocal)
    }
  }
  const handleUpload = () => {
    fileInput.current?.click()
  }
  return (
    <>
      <ToastContainer />
      <span className={style} onClick={showModal}>
        {children}
      </span>
      <Modal
        style={{ top: '20px' }}
        width={700}
        open={isModalOpen}
        closable={false}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <form onSubmit={onSubmit} noValidate>
          <div className='border-b-[1px] border-[rgba(22,24,35,0.2)]'>
            <div className='flex items-center justify-between pt-[5px] pb-[12px]'>
              <div className='text-[20px] font-bold '>{t('Edit profile')}</div>
              <div className='cursor-pointer' onClick={handleCancel}>
                {CloseX()}
              </div>
            </div>
          </div>
          <div>
            <div className='border-b-[1px] border-[rgba(22,24,35,0.2)]'>
              <div className='relative flex pt-[24px] pb-[20px]'>
                <div className='mr-[24px] w-[120px] text-[16px] font-medium'>{t('Profile photo')}</div>
                <div className='ml-[128px] h-[100px] w-[100px] overflow-hidden rounded-full'>
                  <img
                    src={previewImg || ImgBasic(profile?.avatar)}
                    alt=''
                    onClick={handleUpload}
                    className='h-full w-full object-cover'
                  />
                  <input hidden type='file' accept='.jpg, .jpeg,.png' ref={fileInput} onChange={onFileChange} />
                </div>
                <div
                  className='absolute left-[53%] top-[60%] h-[30px] w-[30px] rounded-full border border-[rgb(208,208,211)] bg-[rgb(255,255,255)]'
                  onClick={handleUpload}
                >
                  <div className='flex translate-y-[5px] justify-center'>{EditAvatar()}</div>
                </div>
              </div>
            </div>
            <div className='border-b-[1px] border-[rgba(22,24,35,0.2)]'>
              <div className='flex pt-4 pb-5'>
                <div className='mr-[24px] w-[120px] text-[16px] font-medium'>First name</div>
                <div>
                  <input
                    type='text'
                    {...register('first_name', rules.first_name)}
                    className='h-[38px] w-[360px] rounded border border-transparent bg-[#f1f1f2] px-[12px] py-[7px] text-[rgb(22,24,35)] caret-[red] outline-none focus:border focus:border-[rgba(73,79,113,0.12)]'
                  />
                </div>
                <div>{errors.first_name?.message}</div>
              </div>
            </div>
            <div className='border-b-[1px] border-[rgba(22,24,35,0.2)]'>
              <div className='flex pt-4 pb-4'>
                <div className='mr-[24px] w-[120px] text-[16px] font-medium'>Last name</div>
                <div>
                  <input
                    type='text'
                    {...register('last_name', rules.last_name)}
                    className='h-[38px] w-[360px] rounded border border-transparent bg-[#f1f1f2] px-[12px] py-[7px] text-[rgb(22,24,35)] caret-[red] outline-none focus:border focus:border-[rgba(73,79,113,0.12)]'
                  />
                </div>
                <div>{errors.last_name?.message}</div>
              </div>
            </div>
            <div className='border-b-[1px] border-[rgba(22,24,35,0.2)]'>
              <div className='flex pt-4 pb-4'>
                <div className='mr-[24px] w-[120px] text-[16px] font-medium'>Link website</div>
                <div>
                  <input
                    type='text'
                    {...register('website_url')}
                    className='h-[38px] w-[360px] rounded border border-transparent bg-[#f1f1f2] px-[12px] py-[7px] text-[rgb(22,24,35)] caret-[red] outline-none focus:border focus:border-[rgba(73,79,113,0.12)]'
                  />
                </div>
                <div>{errors.website_url?.message}</div>
              </div>
            </div>
            <div className='border-b-[1px] border-[rgba(22,24,35,0.2)]'>
              <div className='flex pt-4 pb-4'>
                <div className='mr-[24px] w-[120px] text-[16px] font-medium'>Link facebook</div>
                <div>
                  <input
                    type='text'
                    {...register('facebook_url')}
                    className='h-[38px] w-[360px] rounded border border-transparent bg-[#f1f1f2] px-[12px] py-[7px] text-[rgb(22,24,35)] caret-[red] outline-none focus:border focus:border-[rgba(73,79,113,0.12)]'
                  />
                </div>
              </div>
            </div>
            <div className='border-b-[1px] border-[rgba(22,24,35,0.2)]'>
              <div className='flex pt-4 pb-4'>
                <div className='mr-[24px] w-[120px] text-[16px] font-medium'>{t('Bio')}</div>
                <textarea
                  type='text'
                  {...register('bio', rules.bio)}
                  className='h-[100px] w-[360px] resize-none rounded border border-transparent bg-[#f1f1f2] px-[12px] py-[7px] text-[rgb(22,24,35)] caret-[red] outline-none focus:border focus:border-[rgba(73,79,113,0.12)]'
                />
                <div>{errors.bio?.message}</div>
              </div>
            </div>
          </div>
          <div className='flex justify-end pt-[20px]'>
            <button
              className='mr-3 min-w-[96px] rounded border border-[#e3e3e4] px-4 py-[7px] text-[16px] font-medium hover:bg-[#f8f8f8]'
              type='button'
              onClick={handleCancel}
            >
              {t('Cancel')}
            </button>
            <button
              className='min-w-[96px] rounded border border-[#e3e3e4] px-4 py-[7px] text-[16px] font-medium hover:bg-[#f8f8f8]'
              type='submit'
            >
              {t('Save')}
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
