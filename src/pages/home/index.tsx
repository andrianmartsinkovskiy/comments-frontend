import { HomeBar } from './home-bar'
import { useEffect, useState } from 'react'
import { addCommentRequest, getAllCommentsRequest, removeCommentRequest } from '../../actions/comment.actions'
import { CommentsList } from '../../components/comments-list'
import { IComment } from '../../types/comment.interface'
import { AddCommentModal } from '../../components/add-comment-modal'
import { LoaderDefault } from '../../components/ui/loader-default'
import { toast } from 'react-toastify'
import moment from 'moment'

const HomePage = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  const [commentsList, setCommentsList] = useState<IComment[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getCommentsHandler()
  }, [])

  const toggleModal = () => setIsModalActive(prev => !prev)

  const getCommentsHandler = async () => {
    setIsLoading(true)
    const data: IComment[] | null = await getAllCommentsRequest()

    if (data != null) {
      const transformedData = data?.map((item: IComment) => {
        item.created_at = moment(item.created_at).calendar()
        return item
      })
      setCommentsList(transformedData || [])
    } else {
      toast('An error occurred while getting a comments, please try again later')
    }

    setIsLoading(false)
  }

  const addCommentHandler = async (text: string) => {
    setIsLoading(true)
    const data = await addCommentRequest(text)

    if (data) {
      await getCommentsHandler()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      toggleModal()
    } else {
      setIsLoading(false)
      toast('An error occurred while adding a comment, please try again later')
    }
  }

  const removeCommentHandler = async (id: number) => {
    setIsLoading(true)
    const data = await removeCommentRequest(id)

    if (data) {
      getCommentsHandler()
    } else {
      setIsLoading(false)
      toast('An error occurred while remove a comment, please try again later')
    }
  }

  return (
    <div>
      <HomeBar toggleModal={toggleModal} />
      <CommentsList removeSubmit={removeCommentHandler} list={commentsList} />
      {isModalActive && <AddCommentModal toggleModal={toggleModal} submit={addCommentHandler} />}
      {isLoading && <LoaderDefault />}
    </div>
  )
}

export {
  HomePage
}
