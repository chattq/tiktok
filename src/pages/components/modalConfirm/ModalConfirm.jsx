import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { CommentAPI } from '../../../apis/CommentAPI'
import { toast, ToastContainer } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function ModalConfirm({ openModal, setOpenModal, idComment, setDataComment, uuidVideo }) {
  const cancelButtonRef = useRef(null)
  const deleteCommentMutation = useMutation(CommentAPI.deleteAComment)
  const queryClient = useQueryClient()
  function handleClearComment() {
    deleteCommentMutation.mutate(idComment, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['/api/users/@', uuidVideo], exact: true })
        toast.success(
          <>
            <FontAwesomeIcon icon={faTiktok} />
            <span className='ml-[5px]'>Xóa bình luận thành công</span>
          </>,
          {
            position: 'top-right',
            autoClose: 2000,
            theme: 'light'
          }
        )
        setOpenModal(false)
        setDataComment(null)
      }
    })
    // CommentAPI.deleteAComment(idComment)
    //   .then(() => {
    //     toast.success(
    //       <>
    //         <FontAwesomeIcon icon={faTiktok} />
    //         <span className='ml-[5px]'>Xóa bình luận thành công</span>
    //       </>,
    //       {
    //         position: 'top-right',
    //         autoClose: 2000,
    //         theme: 'light'
    //       }
    //     )
    //     setOpenModal(false)
    //     setDataComment(null)
    //   })

    //   .catch(() => {
    //     toast.error(
    //       <>
    //         <FontAwesomeIcon icon={faTiktok} />
    //         <span className='ml-[5px]'>Xóa bình luận thất bại</span>
    //       </>,
    //       {
    //         position: 'top-right',
    //         autoClose: 2000,
    //         theme: 'light'
    //       }
    //     )
    //   })
  }
  return (
    <>
      <ToastContainer />
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog as='div' className='relative z-10' initialFocus={cancelButtonRef} onClose={() => setOpenModal(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                  <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                    <div className='sm:flex sm:items-start'>
                      <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                        <ExclamationTriangleIcon className='h-6 w-6 text-red-600' aria-hidden='true' />
                      </div>
                      <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                        <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                          Xóa bình luận
                        </Dialog.Title>
                        <div className='mt-2'>
                          <p className='text-sm text-gray-500'>Bạn chắc chắn muốn xóa bình luận này chứ?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                    <button
                      type='button'
                      className='inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                      onClick={handleClearComment}
                    >
                      Xóa
                    </button>
                    <button
                      type='button'
                      className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                      onClick={() => setOpenModal(false)}
                      ref={cancelButtonRef}
                    >
                      Hủy
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
