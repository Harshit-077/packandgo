import React from 'react'

const Hero = () => {
    return (
        <>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(/main.jpg) `
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Pack your bags. We’re going on vacation!
                        </p>
                        <button className="btn btn-ghost btn-primary rounded-box">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero