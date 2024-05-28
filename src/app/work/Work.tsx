'use client'

import { useEffect, useState } from 'react'

import Button from '@/components/Button/Button'
import Form from '@/components/Form/Form'
import LinkButton from '@/components/LinkButton/LinkButton'
import Modal from '@/components/Modal/Modal'

type Props = {
  hasCookie: boolean
}

const Work = ({ hasCookie }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHasCookie, setIsHasCookie] = useState(false)

  const text = '閲覧希望の方はIDとパスワードを入力してください'

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    setIsHasCookie(hasCookie)
  }, [hasCookie])

  return (
    <>
      <p>
        正社員/フリーランス時代の制作実績の閲覧にはIDとパスワードが必要となります。
        <br />
        ページ閲覧希望の方はコンタクトページよりお問い合わせください。
      </p>
      <Form />

      {isHasCookie ? (
        <LinkButton href="/work/restricted" text={text} />
      ) : (
        <Button text={text} onClick={handleOpenModal} />
      )}

      <Modal isOpen={isOpen} handleCloseModal={handleCloseModal} title={text} />
    </>
  )
}
export default Work
