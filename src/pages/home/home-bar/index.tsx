import { ButtonDefault } from '../../../components/ui/button-default'
import c from './style.module.css'

interface IHomeBar {
  toggleModal: () => void
}

const HomeBar = ({ toggleModal }: IHomeBar) => {
  return (
    <div className={c.wrap}>
      <h2 className={c.title}>Comments</h2>
      <ButtonDefault submit={toggleModal} text='Add Comment' />
    </div>
  )
}

export {
  HomeBar
}
