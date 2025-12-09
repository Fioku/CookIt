# CookIt

CookIt is a web application that generates recipes based on the ingredients you have on hand. Powered by AI (Hugging Face models), CookIt suggests recipes that you can prepare using the ingredients you provide.

---

## Features

- **Add Ingredients:** Input the ingredients you have available.
- **AI-Powered Recipes:** Generate recipe suggestions using an AI model.
- **Dynamic UI:** View a list of your ingredients and generated recipes.
- **Dark Mode Support:** Toggle between light and dark themes (if implemented).
- **Responsive Layout:** Works well on desktop and mobile screens.

---

## Screenshots

*(Add screenshots here if available)*

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Fioku/CookIt.git
cd CookIt
````

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```
HUGGINGFACE_TOKEN=your_huggingface_token_here
```

> ⚠️ **Important:** Do **not** commit your `.env` file to GitHub. Add it to `.gitignore`.

4. **Start the development server**

```bash
npm run dev
```

5. Open your browser at [http://localhost:5173](http://localhost:5173)

---

## Usage

1. Enter ingredients in the input field (e.g., "Tomato, Chicken, Onion") and click **Add Ingredient**.
2. Once you have added ingredients, click **Get a Recipe** to generate a recipe using AI.
3. The suggested recipe will appear below the ingredients list.

---

## Technologies Used

* **React** (Vite)
* **TailwindCSS** for styling
* **Hugging Face Inference API** for AI recipe generation
* **JavaScript** / JSX

---

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit your changes: `git commit -m "Add some feature"`
5. Push to the branch: `git push origin feature/your-feature`
6. Open a Pull Request

---

## Security Note

* Never commit your API keys or `.env` file to GitHub.
* Use GitHub Secrets or environment variables for secure storage of tokens.

---

## Acknowledgements

* [Hugging Face](https://huggingface.co/) for AI model inference
* [Vite](https://vitejs.dev/) for fast React development
* [TailwindCSS](https://tailwindcss.com/) for UI styling
