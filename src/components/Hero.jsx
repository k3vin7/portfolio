export default function Hero() {
    const startDate = new Date('2025-05-14');
    const today = new Date();

    const diffInMs = today - startDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1;
    return(
        <section className="bg-black text-white py-24 min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-4xl font-bold mb-4"
                >Hello! This is Minjae, Chung.</h1>
                
                <p className="py-10 text-lg mb-6"
                >Since 2025.05.14, Day { diffInDays } studying Front-end Design</p>

                <a herf="#projects"
                className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition"
                >Wanna See My Project?</a>
            </div>
        </section>
    )
}