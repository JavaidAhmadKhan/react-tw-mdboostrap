import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: "#caced1" }}>
            <div className="container p-6">
                <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" alt=''
                            className="w-full rounded-md shadow-lg"
                        />
                    </div>
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp" alt=''
                            className="w-full rounded-md shadow-lg"
                        />
                    </div>
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp" alt=''
                            className="w-full rounded-md shadow-lg"
                        />
                    </div>
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp" alt=''
                            className="w-full rounded-md shadow-lg"
                        />
                    </div>
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp" alt=''
                            className="w-full rounded-md shadow-lg"
                        />
                    </div>
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp" alt=''
                            className="w-full rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2021 Copyright:
                <a className="text-white" href="https://tailwind-elements.com/">Tailwind Elements</a>
            </div>
        </footer>
    )
}

export default Footer