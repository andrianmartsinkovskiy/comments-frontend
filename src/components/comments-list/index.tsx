import { IComment } from '../../types/comment.interface'
import c from './style.module.css'
import { CommentItem } from '../comment-item'

interface ICommentsList {
  list: IComment[]
  removeSubmit: (id: number) => void
}

const CommentsList = ({ list, removeSubmit }: ICommentsList) => {
  return (
    <div className={c.wrap}>
      {
        list.map((item: IComment) => (
          <CommentItem removeSubmit={removeSubmit} key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export {
  CommentsList
}
