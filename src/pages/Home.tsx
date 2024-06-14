import React from 'react';
import BgAnimation from '../components/BgAnimation';

const Home: React.FC = () => {
    return (
        <div className="relative flex flex-col lg:flex-row items-center">
            <div className="relative z-10 p-4 lg:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <div className="text-lg text-gray-800 mb-6">
                    <p className="mb-3">
                        I am a student of <span className="font-semibold">United International University</span>, pursuing a degree in Computer Science and Engineering.
                    </p>
                    <p className="mb-3">
                        Currently, I am passionate about frontend development and exploring technologies like React, Tailwind CSS, and more.
                    </p>
                    <p>
                        This portfolio showcases some of my projects and skills. Feel free to explore and connect with me!
                    </p>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 lg:absolute lg:right-0 lg:top-0 lg:h-full">
                <BgAnimation />
            </div>
        </div>
    );
};

export default Home;
