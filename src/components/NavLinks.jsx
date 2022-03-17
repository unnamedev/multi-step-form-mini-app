import {Link, useLocation, useNavigate} from "react-router-dom"
import {useContext, useEffect} from "react"
import {SignUpFormContext} from "../context/SignUpFormContext"

/**
 * @description - ⚙️ NavLinks Component
 * @returns {JSX.Element}
 * @constructor
 */
const NavLinks = () => {
    const {name, email, twitter, facebook} = useContext(SignUpFormContext)
    const {pathname} = useLocation()
    const navigate = useNavigate()

    // This is a ternary operator that checks if the name and email fields are filled out.
    const isProfileDone = name.length !== 0 && email.length !== 0
    // This is a ternary operator that checks if the twitter and facebook fields are filled out.
    const isSocialDone = twitter.length !== 0 && facebook.length !== 0

    useEffect(() => {
        if (!isProfileDone && !isSocialDone) navigate("/")
    }, [])

    return <div className="pt-5 border-b-2 border-b-slate-300 flex gap-[20px] items-center justify-center">
        <Link className={`pb-3 border-b-2 ${pathname === "/" && "border-b-slate-800 font-semibold"}`} to="/">Profile</Link>
        {isProfileDone ? <Link className={`pb-3 border-b-2 ${pathname === "/social" && "border-b-slate-800  font-semibold"}`} to="/social">Social</Link> : <span className="pb-3 text-slate-500 border-b-2">Social</span>}
        {isProfileDone && isSocialDone ? <Link className={`pb-3 border-b-2 ${pathname === "/review" && "border-b-slate-800 font-semibold"}`} to="/review">Review</Link> : <span className="pb-3 text-slate-500 border-b-2">Review</span>}
    </div>
}

export default NavLinks
