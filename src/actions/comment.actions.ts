import { axiosRequest } from '../axios'

export const getAllCommentsRequest = async () => {
  let response = null

  try {
    const data = await axiosRequest.get(
      'api/comments/getAll'
    )

    response = data.data
  } catch (error) {
    console.warn(error)
  }

  return response
}

export const addCommentRequest = async (text: string) => {
  let response = null

  try {
    const data = await axiosRequest.post(
      'api/comments/add',
      {
        text
      }
    )

    response = data.data.message
  } catch (error) {
    console.warn(error)
  }

  return response
}

export const removeCommentRequest = async (id: number) => {
  let response = null

  try {
    const data = await axiosRequest.delete(
      'api/comments/delete/' + id
    )

    response = data.data.message
  } catch (error) {
    console.warn(error)
  }

  return response
}
