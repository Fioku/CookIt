import { useState } from "react"
import { getRecipeFromMistral } from "../ai"
import ReadyForRecipe from "./ReadyForRecipe"
import SuggestedRecipe from "./SuggestedRecipe"

export default function Form() {
    const [value, setValue] = useState([])
    const [recipe, setRecipe] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        formData.get("text-input") ? setValue([...value, formData.get("text-input")]) : null
        event.currentTarget.reset()
    }

    function getRecipeFromMistralWrapper() {
        value ? getRecipeFromMistral(value).then((recipeText) => {
            setRecipe(recipeText)
        }) : null
    }

    return (
        <main className="w-full flex flex-col items-center gap-15">
            <form action="" className='flex gap-5 w-full justify-center p-5' onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. Orange" name="text-input" className='grow dark:bg-gray-200 min-w-[50px] max-w-[550px] shadow-md border rounded-sm border-gray-300 dark:border-black/30 p-2'></input>
                <button className='dark:bg-black/40 bg-black text-white rounded-sm p-2 grow min-w-[50px] max-w-[250px]'>+ Add ingrediant</button>
            </form>
            <div className='grow w-full min-w-[150px] max-w-[850px] h-[450px] overflow-y-auto'>
                <h1 className='font-bold text-2xl dark:text-gray-200 text-black'>Ingredients on hands:</h1>
                <ul>
                    {value.map(item => (
                        <li key={item} className="mt-5 font-semibold text-xl dark:text-gray-200 text-black">. {item}</li>
                    ))}
                </ul>
            </div>
            {value.length > 0 && <ReadyForRecipe getRecipeFromMistralWrapper={getRecipeFromMistralWrapper} />}
            {recipe && <SuggestedRecipe recipe={recipe} />}
        </main>
    )
}