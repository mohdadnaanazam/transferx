import { createContext, Dispatch, useReducer } from 'react'

type ViewType = 'grid' | 'list'

interface IViewState {
  currentView: ViewType;
}

type ViewActionType = 'SET_CURRENT_VIEW'

interface IViewAction {
  type: ViewActionType;
  payload: ViewType;
}

const INITIAL_VIEW_STATE: IViewState = {
  currentView: 'grid'
}

export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW'

const ViewReducer = (state: IViewState, action: IViewAction): IViewState => {
  switch (action.type) {
    case 'SET_CURRENT_VIEW':
      return { ...state, currentView: action.payload }
    default:
      return state
  }
}

export const ViewContext = createContext<[IViewState, Dispatch<IViewAction>]>([ INITIAL_VIEW_STATE, () => null ])

export const ViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(ViewReducer, INITIAL_VIEW_STATE)

  return <ViewContext.Provider value={[state, dispatch]}>{children}</ViewContext.Provider>
}
