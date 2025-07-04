export default function Hero() {
    const startDate = new Date('2025-05-14');
    const today = new Date();

    const diffInMs = today - startDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1;
    return(
        <section className="bg-black text-white h-full flex items-center snap-start" id="hero">
            <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-left text-5xl font-bold mb-4"
                >Hello!<br />
                This is<br />
                Minjae, Chung</h1>
                
                <p className="py-10 text-lg mb-6"
                >Since 2025.05.14, Day { diffInDays } studying Front-End Design</p>

                <a href="#projects"
                className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition"
                >Wanna See My Project?</a>
            </div>
        </section>
    )
}