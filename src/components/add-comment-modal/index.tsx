import { ButtonDefault } from '../ui/button-default'
import { useState } from 'react'
import { toast } from 'react-toastify'
import c from './style.module.css'

interface IAddCommentModal {
  submit: (text: string) => void
  toggleModal: () => void
}

const AddCommentModal = ({ submit, toggleModal }: IAddCommentModal) => {
  const [message, setMessage] = useState('')

  const submitHandler = () => {
    if (message.length < 3) {
      return toast('min comment length is 3 characters')
    }
    submit(message)
  }

  const onMessageChange = (e: any) => {
    setMessage(e.target.value)
  }

  const closeHandler = (e: any) => {
    if (e.target.dataset.name === 'wrap') {
      toggleModal()
    }
  }

  return (
    <div className={c.wrap} data-name='wrap' onClick={closeHandler}>
      <div className={c.container}>
        <div className={c.bar}>
          <h2 className={c.title}>Add Comment</h2>

          <ButtonDefault submit={submitHandler} text='Send' />
        </div>

        <div className={c.body}>
          <textarea
            className={c.area}
            name='comment-area'
            id='comment-area'
            value={message}
            onChange={onMessageChange}
          />
        </div>
      </div>
    </div>
  )
}

export {
  AddCommentModal
}
