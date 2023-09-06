import c from './style.module.css'
import { IComment } from '../../types/comment.interface'
import { FC } from 'react'
import { ReactComponent as Remove } from '../../assets/remove.svg'
interface ICommentItem {
  item: IComment
  removeSubmit: (id: number) => void
}

const CommentItem: FC<ICommentItem> = ({ item, removeSubmit }) => {
  return (
    <div className={c.wrap}>
      <span className={c.remove} onClick={() => removeSubmit(item.id)}>
        <Remove />
      </span>
      <div className={c.body}>
        <p>{item.text}</p>
      </div>
      <p>
        {item.created_at}
      </p>
    </div>
  )
}

export {
  CommentItem
}
