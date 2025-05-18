import { useState } from 'react'
import profileImage from '../assets/profile.jpg'
import SailBoat from '../assets/sailboat.png'

export default function About() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
        id="about"
        className="
        relative
        pt-16
        h-full
        flex flex-col items-center justify-center
        bg-black text-white
        overflow-hidden
        snap-start
        px-4
        "
        >
            {/* 텍스트 영역 */}
            <div className="px-4 mx-auto text-center max-w-4xl">
                <h1 className="mb-4 text-5xl font-bold">About Me?</h1>

                <p className="py-10 text-lg">
                    I’m Minjae, a frontend enthusiast exploring interactive design.
                </p>

                <p className="text-lg mb-6">
                    Details are at the right side of this page.
                </p>
            </div>

            {/* 돛단배 영역 */}
            <div className='
                absolute
                h-[80vh] w-auto
                flex items-end justify-start
                bottom-10
                opacity-20 pointer-events-none
                animate-sail
                z-10
            '>
                <img
                    src={SailBoat}
                    alt='sailboat'
                    className='h-[80vh] w-auto'
                />
            </div>

            {/* 오른쪽 반원 박스 전체 */}
            <div className='
                absolute
                rounded-l-full
                w-60 h-60 -right-28
                top-1/2 -translate-y-1/2
                flex items-center
                bg-white text-black
                hover:h-[100vh] hover:w-[80vw]
                transition-all ease-in-out duration-500
                z-30
                overflow-hidden
            '>
                {/* "Go CHECK" 텍스트 */}
                <div className='
                    mr-52
                    h-56
                    flex items-center justify-center
                '>
                    <p className='pl-10 font-semibold'>Go<br />CHECK</p>
                </div>

                {/* 프로필 이미지 */}
                <div>
                    <img
                        src={profileImage}
                        alt='profile'
                        className='w-auto h-56 object-contain rounded-xl border border-gray-300 shadow-sm' />
                </div>

                {/* 이름/학교 설명 박스 */}
                <div>
                    <div className='h-56 flex-col items-start justify-start'>
                        <div className='border-l-4 border-gray-300 pl-4 py-2'>
                            <h2>정민재</h2>
                            <p>Min-jae, Chung</p>
                        </div>
                        <div className='border-l-4 border-gray-400 pl-4 py-2'>
                            <h2>Kyung Hee Univ.</h2>
                            <p>Computer Science and Engineering</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
