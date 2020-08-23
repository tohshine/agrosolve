import {SETDATA_LOADING,CANCELDATA_LOADING} from '../actions/Types'

const initialstate ={
    loading:false
}

export const dataLoading =(state=initialstate,action)=>{
  switch (action.type) {
      case SETDATA_LOADING:
          return{
            ...state,
            loading:true
          }
       case CANCELDATA_LOADING:
           return{
               ...state,
               loading:false
           }   
  
      default:
          return state;
  }
}