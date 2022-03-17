import {BrowserRouter as Router} from "react-router-dom"
import {SignUpForm} from "./components"

/**
 * @description - ⚙️ Root Component
 * @returns {JSX.Element}
 * @constructor
 */
const Root = () =>
    <Router>
        <div className="overflow-hidden bg-gray-200 w-full h-screen">
            <SignUpForm/>
        </div>
    </Router>

export default Root
