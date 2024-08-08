import React, { useState } from 'react';
import OpenAI from 'openai';
import { Footer } from "../../components/Footer";
// Inicializar OpenAI
const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Asegúrate de reemplazar esto con tu clave API de OpenAI
    dangerouslyAllowBrowser: true
});

export function Home() {
    const [input, setInput] = useState('');
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerateJoke = async () => {
        if (!input.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const completion = await openai.chat.completions.create({
                messages: [
                    { role: 'system', content: 'Eres un generador de chistes.' },
                    { role: 'user', content: `Dime un chiste sobre ${input}` }
                ],
                model: 'gpt-4', // Ajusta el modelo según sea necesario
            });

            setJoke(completion.choices[0].message.content);
        } catch (err) {
            setError('Ocurrió un error al generar el chiste.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <div className="max-w-md mx-auto my-10 p-5 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-4 text-center">React con API gpt-4</h1>
                    <h1 className="text-2xl font-bold mb-4 text-center">Generador de Chistes</h1>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Introduce un tema..."
                        className="w-full p-3 border border-gray-300 rounded mb-4"
                    />
                    <button
                        onClick={handleGenerateJoke}
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        {loading ? 'Generando...' : 'Generar Chiste'}
                    </button>
                    {joke && <p className="mt-4 text-center text-lg">{joke}</p>}
                    {error && <p className="mt-4 text-center text-red-500">{error}</p>}
                </div>
            </main>
            <Footer />
        </div>
    );
}
