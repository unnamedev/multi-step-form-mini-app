import {Routes, Route, useLocation} from "react-router-dom"
import {NavLinks, ProfileForm, ReviewForm, SocialForm} from "./index"
import {SignUpFormProvider} from "../context/SignUpFormContext"
import {AnimatePresence} from "framer-motion"

/**
 * @description - ⚙️ SignUpForm Component
 * @returns {JSX.Element}
 * @constructor
 */
const SignUpForm = () => {
    // It's a React hook that returns the current location of the user.
    const location = useLocation()

    return <SignUpFormProvider>
        <NavLinks/>
        <div className="flex items-center justify-center h-full">
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" exact element={<ProfileForm/>}/>
                    <Route path="/social" exact element={<SocialForm/>}/>
                    <Route path="/review" exact element={<ReviewForm/>}/>
                </Routes>
            </AnimatePresence>
        </div>
    </SignUpFormProvider>
}

export default SignUpForm
