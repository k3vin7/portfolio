import lines from '../assets/ProjectBg.png'
import ReactIcon from '../assets/react.png'
import JSIcon from '../assets/javascript.png'
import CSSIcon from '../assets/css.png'
import HTMLIcon from '../assets/html.png'
import NodeIcon from '../assets/nodejs.png'

export default function Skills() {
    const front_end = [
        { name: "React", icon: ReactIcon },
        { name: "JavaScript", icon: JSIcon },
        { name: "CSS", icon: CSSIcon },
        { name: "HTML", icon: HTMLIcon },
    ]

    const back_end = [
        { name: "Nodejs", icon: NodeIcon },
    ]

    return(
        <section className="
        relative
        h-full
        flex flex-col items-center justify-center
        bg-black text-white
        overflow-hidden
        snap-start
        px-4"
        id="skills"
        >
            <div className='
            absolute
            '>
                <img src={ lines } 
                alt='projects_background'
                className='
                h-[70vh]
                '/>
            </div>
            <div className='
            flex
            '>
                {/* 프론트엔드 */}
                <div className='
                absolute
                top-[11vh] left-[21vw]
                rounded-full
                h-[25vh] w-[25vh]
                flex flex-col items-center justify-center
                bg-black border-white border-4
                transition-all ease-in-out duration-500
                transform hover:scale-[2.8]
                origin-top-right
                group
                '>
                    {/* 기본 텍스트 */}
                    <div>
                        <p className='
                        font-semibold text-2xl
                        group-hover:opacity-0
                        transition-all duration-300
                        '>Front-End</p>
                    </div>
                    {/* 프론트엔드 리스트 */}
                    <div>
                        
                    </div>
                </div>

                {/* 백엔드 */}
                <div className='
                absolute
                bottom-[5vh] left-[32vw]
                rounded-full
                h-[20vh] w-[20vh]
                flex flex-col items-center justify-center
                bg-black border-white border-4
                transition-all ease-in-out duration-500
                transform hover:scale-[2.8]
                origin-bottom
                group
                '>
                    {/* 기본텍스트 */}
                    <div>
                        <p className='
                        font-semibold text-2xl
                        group-hover:opacity-0
                        transition-all duration-300
                        '>Back-End</p>
                    </div>
                    {/* 백엔드 리스트 */}
                    <div>

                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h1 className="mb-4 text-5xl font-bold">Stacks</h1>
            </div> 
        </section>
    )
}