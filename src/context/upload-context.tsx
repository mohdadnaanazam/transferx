'use client'

import { addDays } from "date-fns"
import { Dispatch, createContext, useReducer } from "react"

interface IInitialState {
  file: {
    lastModified: number,
    lastModifiedDate: Date,
    name: string,
    size: number,
    type: string,
    webkitRelativePath: string
  } | null,
  isUploading: boolean,
  filename: string,
  expiryDate: Date
  pin: string
}

interface IAction {
  type: string,
  payload?: any
}

const INITIAL_STATE = {
  file: null,
  isUploading: false,
  filename: '',
  expiryDate: addDays(new Date, 6),
  pin: ''
}

export const SET_FILE = 'SET_FILE'
export const IS_UPLOADING = 'IS_UPLOADING'
export const SET_FILE_NAME = 'SET_FILE_NAME'
export const SET_EXPIRY_DATE = 'SET_EXPIRY_DATE'
export const SET_PIN = 'SET_PIN'
export const RESET = 'RESET'

const SalesReducer = (state: IInitialState, action: IAction) => {
  switch (action.type) {
    case SET_FILE:
      return {
        ...state,
        file: action.payload,
        filename: action.payload.name  || action.payload
      }
    case IS_UPLOADING:
      return {
        ...state,
        isUploading: action.payload
      }
    case SET_FILE_NAME:
      return {
        ...state,
        filename: action.payload
      }
    
    case SET_EXPIRY_DATE:
      return {
        ...state,
        expiryDate: action.payload
      }
  
    case SET_PIN:
      return {
        ...state,
        pin: action.payload
      }
  
    case RESET:
      return INITIAL_STATE

    default:
      return state
  }
}


export const UploadContext = createContext<[IInitialState, Dispatch<IAction>]>([INITIAL_STATE, () => null])

export const SalesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(SalesReducer, INITIAL_STATE)

  return <UploadContext.Provider value={[state, dispatch]}>{children}</UploadContext.Provider>
}