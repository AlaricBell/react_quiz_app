import { getQuestions } from "../../lib/QuestionHandler";

// Seeds store with questions 
export const questionSeeder = ({dispatch}: any) => (next: any) => (action: any) => {
  if(action.type !== "questionSeedBegan") return  next(action);
  
  next(action)

  const {onSuccess, onError, onReset} = action.payload

  try {
    dispatch({type: onReset})
    return getQuestions().then(res => dispatch({type: onSuccess , payload: res})) 

  } catch(error) {
    return dispatch({type: onError, payload: error})
  }
}