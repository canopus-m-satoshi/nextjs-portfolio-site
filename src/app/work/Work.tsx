'use client'

import { useState } from 'react'

import Button from '@/components/Button/Button'
import Form from '@/components/Form/Form'
import LinkButton from '@/components/LinkButton/LinkButton'
import Modal from '@/components/Modal/Modal'

const Work = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <p>
        正社員/フリーランス時代の制作実績の閲覧にはIDとパスワードが必要となります。
        <br />
        ページ閲覧希望の方はコンタクトページよりお問い合わせください。
      </p>
      <Button
        text="正社員/フリーランス時代の制作実績を閲覧希望の方はこちら"
        onClick={handleOpenModal}
      />
      <Modal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        title="ID/パスワードを入力してください"
      />
    </>
  )
}
export default Work
