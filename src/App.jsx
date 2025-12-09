import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";

export default function App() {
    const [mode, setMode] = React.useState('');
    if (mode === '') {
            document.getElementsByTagName("body")[0].className = "bg-[#fffefc]";
    } else {
        document.getElementsByTagName("body")[0].className = "bg-zinc-800";
    }
    return (
        <div className={`${mode ? 'dark' :''} flex flex-col justify-center items-center gap-30`}>
            <Header mode={mode} setMode={setMode} />
            <Form />
        </div>
    )
}