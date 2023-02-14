import Modal from 'antd/es/modal/Modal'
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'

export default function ModalLogin({ children, style }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
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
        <div>a</div>
      </Modal>
    </>
  )
}
