import React from 'react'

const About = () => {
    return (
        <div name='about' className=' w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div>
                    </div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>Hi, I'm Ugo Perpetua, nice to meet you Please take a look around. </p>
                        </div>
                        <div>
                            <p> I'm passionate about creating beautiful and intuitive 
                                user experiences. I find great satisfaction in turning 
                                complex concepts into simple and intuitive designs that
                                 are easy to use. I love working with a team to create 
                                 something that makes people's lives easier and more enjoyable.
                                  For me, front-end development is about more than just 
                                writing code - it's about creating something that makes 
                                a difference in the world.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default About