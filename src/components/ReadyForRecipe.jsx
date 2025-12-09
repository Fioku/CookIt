export default function ReadyForRecipe({ getRecipeFromMistralWrapper }) {
    return (
        <div className="bg-gray-100 dark:bg-black/40 rounded-xl p-6 flex gap-5 items-center justify-between shadow shadow-md">
            <div>
                <h2 className="text-xl font-semibold dark:text-gray-200 text-black">Ready for a recipe?</h2>
                <p className="text-gray-600 dark:text-gray-400">Generate a recipe from your list of ingredients.</p>
            </div>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 cursor-pointer" id='get-recipe-button' onClick={getRecipeFromMistralWrapper}>Get a recipe</button>
        </div>
    )
}