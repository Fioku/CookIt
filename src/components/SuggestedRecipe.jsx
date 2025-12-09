export default function SuggestedRecipe({ recipe }) {
    return (
        <div className="w-full min-w-[150px] max-w-[850px] mb-5 border-b border-gray-200 dark:border-black/30 pb-5">
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-200 text-black">Suggested Recipe:</h2>
            <pre readOnly className="text-md font-semibold whitespace-pre-wrap dark:text-gray-200 text-black">{ recipe }</pre>
        </div>
    )
}