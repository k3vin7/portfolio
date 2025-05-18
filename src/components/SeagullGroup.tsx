import Seagull from '../assets/bird.png'

const flyAnimations = ['fly1', 'fly2', 'fly3']

export default function SeagullGroup() {
  const birds = Array.from({ length: 3 }) // 갈매기 3마리 생성

  return (
    <>
      {birds.map((_, idx) => {
        const anim = flyAnimations[Math.floor(Math.random() * flyAnimations.length)]
        const top = 100  // 100px
        const left = 150 // 150px
        const delay = Math.random() * 3

        let animClass = ''
        if (anim === 'fly1') animClass = 'animate-fly1'
        else if (anim === 'fly2') animClass = 'animate-fly2'
        else animClass = 'animate-fly3'

        return (
        <img
          key={idx}
          src={Seagull}
          alt="seagull"
          className={`absolute w-[8vh] h-auto pointer-events-none z-50 ${animClass}`}
          style={{
            top: '100px',
            left: '100px',
            animationDelay: `${delay}s`,
            animationFillMode: 'both',
          }}
        />


        )
      })}
    </>
  )
}
