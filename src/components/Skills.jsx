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
        {/* <div className='
            absolute
            '>
                <img src={ lines } 
                alt='projects_background'
                className='
                h-[70vh]
                '/>
            </div>*/}
        <div className="flex items-center justify-center h-screen bg-black">
            <svg
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full bg-black"
            >
                <text
                    x="400"
                    y="300"
                    fill="white"
                    font-size="40"
                    font-family="sans-serif"
                    text-anchor="middle"
                    dominant-baseline="middle"
                >
                    Stacks
                </text>
                {/* ------ line-1 ------ */}
                <path
                    id="line-1"
                    d="
                    M 350 250
                    V 150
                    L 300 100
                    V 50
                    M 295 45
                    H 245"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                />
                <circle cx="300" cy="45" r="5" stroke="white" strokeWidth="2" fill="none" />
                <circle cx="240" cy="45" r="5" stroke="white" strokeWidth="2" fill="none" />

                {Array.from({ length: 1000 }, (_, i) => (
                <circle key={i} r="5" fill="black">
                    <animateMotion dur="0.8s" begin={`${i * 2}s`} repeatCount="1">
                    <mpath href="#line-1" />
                    </animateMotion>
                </circle>
                ))}

                {/* ------ line-2 ------ */}
                <path 
                    id="line-2"
                    d="
                    M 400 250
                    V 200
                    L 420 180
                    V 30"
                    stroke="white"
                    stroke-width="2"
                    fill="none"
                />
                <circle cx="420" cy="25" r="5" stroke="white" stroke-width="2" fill="none" />

                {Array.from({ length: 1000 }, (_, i) => (
                <circle key={i} r="5" fill="black">
                    <animateMotion dur="0.7s" begin={`${i * 2 + 0.5}s`} repeatCount="1">
                    <mpath href="#line-2" />
                    </animateMotion>
                </circle>
                ))}

                {/* ------ line-3 ------ */}
                <path 
                    id="line-3"
                    d="
                    M 450 250
                    V 225
                    L 470 205
                    H 550
                    L 560 195"
                    stroke="white"
                    stroke-width="2"
                    fill="none"
                />

                {Array.from({ length: 1000 }, (_, i) => (
                <circle key={i} r="5" fill="black">
                    <animateMotion dur="0.5s" begin={`${i * 2 + 0.2}s`} repeatCount="1">
                    <mpath href="#line-3" />
                    </animateMotion>
                </circle>
                ))}

                {/* ------ line-4 ------ */}
                <path
                    id="line-4"
                    d="
                    M 500 300
                    H 650"
                    stroke="white"
                    stroke-width="2"
                    fill="none"
                />
                <circle cx="655" cy="300" r="5" stroke="white" stroke-width="2" fill="none" />

                {Array.from({ length: 1000 }, (_, i) => (
                <circle key={i} r="5" fill="black">
                    <animateMotion dur="0.2s" begin={`${ i }`} repeatCount="1">
                    <mpath href="#line-4" />
                    </animateMotion>
                </circle>
                ))}                

                {/* ------ line-5 ------ */}
                <path
                    id="line-5"
                    d="
                    M 450 350
                    V 450
                    L 500 500
                    V 550"
                    stroke="white"
                    stroke-width="2"
                    fill="none"
                />
                <circle cx="500" cy="555" r="5" stroke="white" stroke-width="2" fill="none" />

                {Array.from({ length: 1000 }, (_, i) => (
                <circle key={i} r="5" fill="black">
                    <animateMotion dur="0.7s" begin={`${i * 2 + 0.2}s`} repeatCount="1">
                    <mpath href="#line-5" />
                    </animateMotion>
                </circle>
                ))}   

            </svg>
        </div>
        

        </section>
    )
}