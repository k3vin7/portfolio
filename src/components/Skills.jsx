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
        <section className="min-h-screen py-20 snap-start" id="skills">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-10">Stacks</h2>
                
                <div className='px-2 text-2xl text-left font-bold border-b-4'>Front-end</div>
                <div className="py-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center">
                    {front_end.map((front_end, index)=>(
                        <div key={index} className="flex flex-col items-center">
                          <img
                          src={front_end.icon}
                          alt={front_end.name}
                          className='w-24 h-24 mb-2'
                          />
                          <p className='py-4 text-xl font-bold'>{front_end.name}</p>
                        </div>
                    ))}
                </div>

                <div className='px-2 text-2xl text-left font-bold border-b-4'>Back-end</div>
                <div className="py-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center">
                    {back_end.map((back_end, index)=>(
                        <div key={index} className="flex flex-col items-center">
                          <img
                          src={back_end.icon}
                          alt={back_end.name}
                          className='w-24 h-24 mb-2'
                          />
                          <p className='py-4 text-xl font-bold'>{back_end.name}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}