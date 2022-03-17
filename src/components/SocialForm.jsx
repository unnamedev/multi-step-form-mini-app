import {useContext} from "react"
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import {SignUpFormContext} from "../context/SignUpFormContext"
import {Animator} from "./index"

/**
 * @description - ⚙️ SocialForm Component
 * @returns {JSX.Element}
 * @constructor
 */
const SocialForm = () => {
    let navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {twitter, facebook, setSocial} = useContext(SignUpFormContext)

    // It's a callback function that will be called when the form is submitted.
    const onSubmit = ({twitter, facebook}) => {
        setSocial({twitter, facebook})
        navigate("/review")
    }

    return <Animator className="w-full max-w-2xl pl-2 pr-2">
        <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-start gap-[20px] w-full max-w-2xl"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className="font-semibold text-xl">How can we find you on social?</h2>

            <div className="w-full">
                <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.twitter && "border-red-500 focus:border-red-500"}`}
                    type="text"
                    name="twitter"
                    defaultValue={twitter}
                    placeholder="What's your twitter?"
                    {...register("twitter", {required: true})}
                />
                {errors.twitter && <p className="text-red-600 mt-1 text-sm">Twitter is required</p>}
            </div>

            <div className="w-full">
                <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.facebook && "border-red-500 focus:border-red-500"}`}
                    type="text"
                    name="facebook"
                    defaultValue={facebook}
                    placeholder="What's your facebook?"
                    {...register("facebook", {required: true})}

                />
                {errors.facebook && <p className="text-red-600 mt-1 text-sm">Facebook is required</p>}
            </div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >Next
            </button>
        </form>
    </Animator>
}

export default SocialForm
