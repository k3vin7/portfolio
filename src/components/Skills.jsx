import { useEffect, useRef, useState } from 'react';
import ReactIcon from '../assets/react.png'
import JSIcon from '../assets/javascript.png'
import CSSIcon from '../assets/css.png'
import HTMLIcon from '../assets/html.png'
import NodeIcon from '../assets/nodejs.png'

export default function Skills() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.4 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return(
        <section 
        id="skills"
        ref={sectionRef}
        className="
        relative
        h-full
        flex flex-col items-center justify-center
        bg-black text-white
        overflow-hidden
        snap-start
        px-4">
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
                    font-size="48px"
                    font-family="sans-serif"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-weight="bold"
                    className={`transition-all duration-1000 ease-out transform ${
                        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    Stacks
                </text>


{/* ------ line-1 ------ */}
<path
  id="line-1"
  d="M 350 250 V 150 L 300 100 V 50 H 245"
  stroke="white"
  strokeWidth="2"
  fill="none"
/>
<circle r="5" fill="black">
  <animateMotion
    id="motion1"
    dur="0.5s"
    begin="0s;pause1.end"
    repeatCount="1"
    fill="freeze"
  >
    <mpath href="#line-1" />
  </animateMotion>
  <animate
    id="pause1"
    attributeName="visibility"
    from="visible"
    to="visible"
    begin="motion1.end"
    dur="2s"
    fill="freeze"
  />
</circle>

<circle cx="245" cy="50" r="5" stroke="white" stroke-width="2" fill="black" />
<circle cx="300" cy="50" r="5" stroke="white" stroke-width="2" fill="black" />

{/* ------ line-2 ------ */}
<path
  id="line-2"
  d="M 400 250 V 200 L 420 180 V 30"
  stroke="white"
  strokeWidth="2"
  fill="none"
/>
<circle r="5" fill="black">
  <animateMotion
    id="motion2"
    dur="0.5s"
    begin="0s;pause2.end"
    repeatCount="1"
    fill="freeze"
  >
    <mpath href="#line-2" />
  </animateMotion>
  <animate
    id="pause2"
    attributeName="visibility"
    from="visible"
    to="visible"
    begin="motion2.end"
    dur="3s"
    fill="freeze"
  />
</circle>
<circle cx="420" cy="30" r="5" stroke="white" stroke-width="2" fill="black" />

{/* ------ line-3 ------ */}
<path
  id="line-3"
  d="M 450 250 V 225 L 470 205 H 550 L 564 191"
  stroke="white"
  strokeWidth="2"
  fill="none"
/>
<circle r="5" fill="black">
  <animateMotion
    id="motion3"
    dur="0.5s"
    begin="0s;pause3.end"
    repeatCount="1"
    fill="freeze"
  >
    <mpath href="#line-3" />
  </animateMotion>
  <animate
    id="pause3"
    attributeName="visibility"
    from="visible"
    to="visible"
    begin="motion3.end"
    dur="1.2s"
    fill="freeze"
  />
</circle>

{/* ------ line-4 ------ */}
<path
  id="line-4"
  d="M 500 300 H 650"
  stroke="white"
  strokeWidth="2"
  fill="none"
/>
<circle r="5" fill="black">
  <animateMotion
    id="motion4"
    dur="0.5s"
    begin="0s;pause4.end"
    repeatCount="1"
    fill="freeze"
  >
    <mpath href="#line-4" />
  </animateMotion>
  <animate
    id="pause4"
    attributeName="visibility"
    from="visible"
    to="visible"
    begin="motion4.end"
    dur="0.8s"
    fill="freeze"
  />
</circle>
<circle cx="650" cy="300" r="5" stroke="white" stroke-width="2" fill="black" />

{/* ------ line-5 ------ */}
<path
  id="line-5"
  d="M 450 350 V 450 L 500 500 V 550"
  stroke="white"
  strokeWidth="2"
  fill="none"
/>
<circle r="5" fill="black">
  <animateMotion
    id="motion5"
    dur="0.5s"
    begin="0s;pause5.end"
    repeatCount="1"
    fill="freeze"
  >
    <mpath href="#line-5" />
  </animateMotion>
  <animate
    id="pause5"
    attributeName="visibility"
    from="visible"
    to="visible"
    begin="motion5.end"
    dur="2.5s"
    fill="freeze"
  />
</circle>
<circle cx="500" cy="550" r="5" stroke="white" stroke-width="2" fill="black" />

{/* ------ line-6 ------ */}
<path
  id="line-6"
  d="M 400 350 V 430 L 350 480 V 580"
  stroke="white"
  strokeWidth="2"
  fill="none"
/>
<circle r="5" fill="black">
  <animateMotion
    id="motion6"
    dur="0.5s"
    begin="0s;pause6.end"
    repeatCount="1"
    fill="freeze"
  >
    <mpath href="#line-6" />
  </animateMotion>
  <animate
    id="pause6"
    attributeName="visibility"
    from="visible"
    to="visible"
    begin="motion6.end"
    dur="1.8s"
    fill="freeze"
  />
</circle>
<circle cx="350" cy="580" r="5" stroke="white" stroke-width="2" fill="black" />

{/* ------ line-7 ------ */}
<path
  id="line-7"
  d="M 350 350 V 400 L 300 450 V 550"
  stroke="white"
  strokeWidth="2"
  fill="none"
/>
<circle r="5" fill="black">
  <animateMotion
    id="motion7"
    dur="0.5s"
    begin="0s;pause7.end"
    repeatCount="1"
    fill="freeze"
  >
    <mpath href="#line-7" />
  </animateMotion>
  <animate
    id="pause7"
    attributeName="visibility"
    from="visible"
    to="visible"
    begin="motion7.end"
    dur="1.5s"
    fill="freeze"
  />
</circle>
<circle cx="300" cy="550" r="5" stroke="black" stroke-width="2" fill="black" />

                <g className='group'>
                    <circle cx="610" cy="145" r="70" stroke="white" stroke-width="2" fill="black" />

                    <text                    
                        x="610"
                        y="150"
                        fill="white"
                        font-size="20"
                        text-anchor="middle"
                        dominant-baseline="middle"
                    >
                        Front-End
                    </text>
                    {[
                        { icon: ReactIcon, angle: -120 },
                        { icon: JSIcon, angle: -90 },
                        { icon: HTMLIcon, angle: -60 },
                        { icon: CSSIcon, angle: -30 },
                        ].map(({ icon, angle }, idx) => {
                        const radius = 100; // 펼쳐질 거리
                        const rad = (angle * Math.PI) / 180;
                        const x = 620 + radius * Math.cos(rad) - 15;
                        const y = 150 + radius * Math.sin(rad) - 15;

                        return (
                            <image
                            key={idx}
                            href={icon}
                            width="30"
                            height="30"
                            x={620 - 12} // 시작 위치는 중앙
                            y={150 - 12}
                            className="
                                opacity-0
                                group-hover:opacity-100
                                transition-all duration-500
                            "
                            style={{
                                transform: `translate(${x - 620}px, ${y - 135}px)`,
                                transitionDelay: `${idx * 100}ms`,
                            }}
                            />
                        );
                    })}
                </g>

            </svg>
        </div>
        

        </section>
    )
}