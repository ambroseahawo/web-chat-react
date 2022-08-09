import { FETCH_ALL, CREATE_MESSAGE } from '../constants/actionTypes'

export const createMessage = (messageData) => async (dispatch) => {
  try {
    // if previous messages already existing on local storage
    if (localStorage.getItem('messages')) {
      const allMessages = JSON.parse(localStorage.getItem('messages'))
      // add new message data to existing messages array
      allMessages.push(messageData)
      localStorage.setItem('messages', JSON.stringify(allMessages))
      dispatch({ type: CREATE_MESSAGE, payload: allMessages })
    } else {
      // else create a new messages array
      const messagesArray = []
      messagesArray.push(messageData)
      localStorage.setItem('messages', JSON.stringify(messagesArray))
      dispatch({ type: CREATE_MESSAGE, payload: messagesArray })
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const getMessages = () => async (dispatch) => {
  try {
    const allMessages = JSON.parse(localStorage.getItem('messages'))
    dispatch({ type: FETCH_ALL, payload: allMessages })
  } catch (error) {
    console.log(error.message)
  }
}
