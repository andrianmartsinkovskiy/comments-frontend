import React, { FC } from 'react'
// @ts-expect-error
import c from './style.module.css'

interface IButtonDefault {
  submit: () => void
  text: string
}

const ButtonDefault: FC<IButtonDefault> = ({ submit, text }) => {
  return (
    <button className={c.button} onClick={submit}>
      {text}
    </button>
  )
}

export {
  ButtonDefault
}
