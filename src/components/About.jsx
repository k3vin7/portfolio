import profileImage from '../assets/dummy.png'

export default function About() {
    return(
        <section className="bg-white text-black py-20 min-h-screen snap-start" id="about">
            <div>
                <h2 className="text-3xl font-bold mb-6 text-center"
                >About Me</h2>
            </div>

            <div className="py-10 max-w-3xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                <div className="w-60 h-60 overflow-hidden shadow-lg">
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover"/>
                </div>

                <div className="space-y-4">
                    <div className="border-l-8 pl-4 border-gray-300">
                        <p className="text-lg font-semibold">정민재</p>
                        <p>Minjae, Chung</p>
                    </div>
                    <br />
                    <div className="border-l-8 pl-4 border-gray-400">
                        <p className="text-lg font-semibold">컴퓨터공학과</p>
                        <p>Computer Science and Engineering</p>
                    </div>
                    <br />
                    <div className="border-l-8 pl-4 border-gray-500">
                        <p className="text-lg font-semibold">경희대학교</p>
                        <p>Kyung Hee Univ.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}