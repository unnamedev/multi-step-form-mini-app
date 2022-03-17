import {useContext, useState} from "react"
import {SignUpFormContext} from "../context/SignUpFormContext"
import {useForm} from "react-hook-form"
import {Animator} from "./index"

/**
 * @description - ⚙️ ReviewForm Component
 * @returns {JSX.Element}
 * @constructor
 */
const ReviewForm = () => {
    const {register, handleSubmit} = useForm()
    const {name, email, twitter, facebook} = useContext(SignUpFormContext)
    const [isSubmit, setIsSubmit] = useState(false)
    const fillData = [
        {
            name: "name",
            value: name,
            type: "text"
        },
        {
            name: "email",
            value: email,
            type: "email"
        },
        {
            name: "twitter",
            value: twitter,
            type: "text"
        },
        {
            name: "facebook",
            value: facebook,
            type: "text"
        }
    ]

    // A callback function that will be called when the form is submitted.
    const onSubmit = () => {
        alert("Your data is submitted!")
        setIsSubmit(true)
    }

    return <Animator className="w-full max-w-2xl pl-2 pr-2">
        <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-start gap-[10px] w-full max-w-2xl"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className="font-semibold text-xl">{isSubmit ? "Your data is submitted ✨" : "✏️ Review all your info"}</h2>

            {!isSubmit && fillData.length !== 0 && fillData.map((o, i) => (
                <div className="w-full flex gap-[10px] items-center" key={i}>
                    <label className="shrink-0 font-semibold" htmlFor={o.name}>Your {o.name}:</label>
                    <input
                        className="appearance-none rounded w-full py-2 text-gray-700 leading-tight pointer-events-none"
                        type="text"
                        name={o.name}
                        id={o.type}
                        {...register(`${o.name}`)}
                        defaultValue={o.value}
                    />
                </div>
            ))}

            {!isSubmit && <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >Submit
            </button>}
        </form>
    </Animator>
}

export default ReviewForm
