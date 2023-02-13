import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Button, Modal } from 'antd'
import { useForm } from 'react-hook-form'
import { rules } from '../../../rules/rules'
import { User } from '../../../apis/UserAPI'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import { CloseX } from '../../../Icons/Icons'
import { ImgBasic } from '../../../assets/img'
import { Account } from '../../../apis/AcountAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function ModalEditProfile({ children, style }) {
  const queryClient = useQueryClient()
  let user = JSON.parse(localStorage.getItem('userInfo'))
  const [isModalOpen, setIsModalOpen] = useState(false)
  const fileInput = useRef(null)
  const [file, setFile] = useState()
  const { data: dataProfile, refetch } = useQuery({
    queryKey: ['/auth/me'],
    queryFn: User.me
  })
  const previewImg = useMemo(() => {
    return file ? URL.createObjectURL(file) : user.avatar
  }, [file])
  const profile = dataProfile?.data.data
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()
  const avatar = watch()
  console.log(avatar)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  useEffect(() => {
    if (profile) {
      // setValue('last_name', profile.last_name)
      // setValue('avatar', profile.avatar)
    }
  }, [profile, setValue])
  const updateProfileMutation = useMutation((data) => {
    return User.updateMe(data)
  })
  const onSubmit = handleSubmit(async (data) => {
    const dataUpdate = new FormData()
    dataUpdate.append('avatar', data.avatar)
    dataUpdate.append('last_name', data.last_name)
    dataUpdate.append('first_name', data.first_name)
    dataUpdate.append('bio', data.bio)
    try {
      // updateProfileMutation.mutate(dataUpdate, {
      //   onSuccess: async function () {
      //     await queryClient.invalidateQueries({ queryKey: ['/auth/me'], exact: true })
      //     localStorage.setItem('userInfo', JSON.stringify(dataProfile?.data.data))
      //     toast.success(
      //       <>
      //         <FontAwesomeIcon icon={faTiktok} />
      //         <span className='ml-[5px]'>Upload thành công</span>
      //       </>,
      //       {
      //         position: 'top-right',
      //         autoClose: 2000,
      //         theme: 'light'
      //       }
      //     )
      //   }
      // })
      const response = await User.updateMe(data)
      console.log(response)
      localStorage.setItem('userInfo', JSON.stringify(response.data.data))
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
      setIsModalOpen(false)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  })
  const maxSizeUploadImg = 5 * 1048576
  const onFileChange = (event) => {
    const fileFromLocal = event.target.files?.[0]
    if (fileFromLocal && (fileFromLocal?.size >= maxSizeUploadImg || !fileFromLocal.type.includes('image'))) {
      toast.warning(`Dung lượng file tối đa 5MB, Định dạng:.JPEG, .PNG`)
    } else {
      setFile(fileFromLocal)
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
        width={700}
        open={isModalOpen}
        closable={false}
        onOk={handleOk}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <form onSubmit={onSubmit} noValidate>
          <div className='border-b-[1px] border-[rgba(22,24,35,0.2)]'>
            <div className='flex items-center justify-between pt-[5px] pb-[12px]'>
              <div className='text-[20px] font-bold '>Sửa hồ sơ</div>
              <div className='cursor-pointer' onClick={handleCancel}>
                {CloseX()}
              </div>
            </div>
          </div>
          <div>
            <div className='border-b-[1px] border-[rgba(22,24,35,0.2)]'>
              <div className='flex pt-[24px] pb-[20px]'>
                <div className='mr-[24px] w-[120px] text-[16px] font-medium'>Ảnh hồ sơ</div>
                <div className='ml-[128px] h-[100px] w-[100px] overflow-hidden rounded-full'>
                  <img src={previewImg} alt='' onClick={handleUpload} className='h-full w-full object-cover' />
                  <input hidden type='file' accept='.jpg, .jpeg,.png' ref={fileInput} onChange={onFileChange} />
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
                    className='h-[38px] w-[360px] rounded bg-[#f1f1f2] px-[12px] py-[7px] text-[rgb(22,24,35)] caret-[red] outline-none'
                    defaultValue={user?.first_name}
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
                    className='h-[38px] w-[360px] rounded bg-[#f1f1f2] px-[12px] py-[7px] text-[rgb(22,24,35)] caret-[red] outline-none'
                    defaultValue={user?.last_name}
                  />
                </div>
                <div>{errors.last_name?.message}</div>
              </div>
            </div>
            <div className='border-b-[1px] border-[rgba(22,24,35,0.2)]'>
              <div className='flex'>
                <div className='mr-[24px] w-[120px] text-[16px] font-medium'>Tiểu sử</div>
                <textarea
                  type='text'
                  {...register('bio', rules.bio)}
                  className='h-[100px] w-[360px] resize-none rounded bg-[#f1f1f2] px-[12px] py-[7px] text-[rgb(22,24,35)] caret-[red] outline-none'
                  defaultValue={user.bio}
                />
                <div>{errors.bio?.message}</div>
              </div>
            </div>
          </div>
          <div className='pt-24px flex justify-end'>
            <button
              className='mr-3 min-w-[96px] rounded border border-[#e3e3e4] px-4 py-[7px] text-[16px] font-medium hover:bg-[#f8f8f8]'
              type='button'
              onClick={handleCancel}
            >
              Hủy
            </button>
            <button
              className='min-w-[96px] rounded border border-[#e3e3e4] px-4 py-[7px] text-[16px] font-medium'
              type='submit'
            >
              Lưu
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
