import {createContext, useReducer} from "react"

// This is a way to create a namespace for the actions.
const SET_PROFILE = "@@formProfile/SET_PROFILE"
const SET_SOCIAL = "@@formSocial/SET_SOCIAL"

// This is a React Hook that creates a context object that is used to pass data down the component tree without having to pass props through each child.
export const SignUpFormContext = createContext()

// This is the initial state of the form.
const initialState = {
    name: "",
    email: "",
    twitter: "",
    facebook: ""
}

/* The `SignUpFormContext.Provider` component is a React Context Provider component that provides the `SignUpFormContext`
object to its children. */
export const SignUpFormProvider = ({children}) => {
    // This is the reducer function that is used to update the state of the form.
    const reducer = (state, {type, payload}) => {
        switch (type) {
            case SET_PROFILE:
                return {
                    ...state,
                    name: payload.name,
                    email: payload.email
                }
            case SET_SOCIAL:
                return {
                    ...state,
                    twitter: payload.twitter,
                    facebook: payload.facebook
                }
            default:
                return state
        }
    }

    // This is a React Hook that creates a state object and a dispatch function that is used to update the state.
    const [state, dispatch] = useReducer(reducer, initialState)

    // This is a function that is used to update the state of the form.
    const setProfile = payload => dispatch({type: SET_PROFILE, payload})
    const setSocial = payload => dispatch({type: SET_SOCIAL, payload})

    return <SignUpFormContext.Provider value={{...state, setProfile, setSocial}}>
        {children}
    </SignUpFormContext.Provider>
}