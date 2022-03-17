import {useForm} from "react-hook-form"
import {useNavigate} from "react-router-dom"
import {useContext} from "react"
import {SignUpFormContext} from "../context/SignUpFormContext"
import {Animator} from "./index"

/**
 * @description - ⚙️ ProfileForm Component
 * @returns {JSX.Element}
 * @constructor
 */
const ProfileForm = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {name, email, setProfile} = useContext(SignUpFormContext)

    // A callback function that will be called when the form is submitted.
    const onSubmit = ({name, email}) => {
        setProfile({name, email})
        navigate("/social")
    }

    return <Animator className="w-full max-w-2xl pl-2 pr-2">
        <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col items-start gap-[20px] w-full max-w-2xl"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className="font-semibold text-xl">Tell us about yourself</h2>

            <div className="w-full">
                <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.name && "border-red-500 focus:border-red-500"}`}
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="What's your name?"
                    {...register("name", {required: true})}
                />
                {errors.name && <p className="text-red-600 mt-1 text-sm">Name is required</p>}
            </div>

            <div className="w-full">
                <input
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 ${errors.email && "border-red-500 focus:border-red-500"}`}
                    type="email"
                    name="email"
                    defaultValue={email}
                    placeholder="What's your email?"
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                />
                {errors.email && <p className="text-red-600 mt-1 text-sm">Enter is valid email required</p>}
            </div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >Next
            </button>
        </form>
    </Animator>
}

export default ProfileForm
