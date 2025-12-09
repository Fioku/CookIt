import { InferenceClient } from '@huggingface/inference'

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`

function buttonLoadingState(isLoading) {
    const button = document.getElementById('get-recipe-button')
    if (isLoading) {
        button.innerText = "Generating..."
        button.disabled = true
    } else {
        button.innerText = "Get a recipe"
        button.disabled = false
    }
}

const hf = new InferenceClient(import.meta.env.VITE_HF_TOKEN)
export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        console.log("Generating recipe with ingredients:", ingredientsString)
        buttonLoadingState(true)
        const response = await hf.chatCompletion({
            model: "HuggingFaceTB/SmolLM3-3B:hf-inference",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        const responseText = response.choices[0].message.content
        console.log(responseText.match(/<\/think>([\s\S]*)/)[1].trim().replace(/[#*]/g, ''));
        buttonLoadingState(false)
        return responseText.match(/<\/think>([\s\S]*)/)[1].trim().replace(/[#*]/g, '');
    } catch (err) {
        buttonLoadingState(false)
        console.error(err.message)
    }
}