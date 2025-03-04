import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

function Info() {
    const desc = [
        { title: "takeaway treats", number: "250+", src: '/assets/icons/cup.png' },
        { title: "takeaway treats", number: "250+", src: '/assets/icons/customer-review.png' },
        { title: "takeaway treats", number: "250+", src: '/assets/icons/hot-tea.png' },
        { title: "takeaway treats", number: "250+", src: '/assets/icons/tea.png' },

    ]
    return (
        <>
            <div className="h-screen bg-[#7c4d37] flex flex-col">
                {/* Top Section */}
                <div className="flex justify-center items-center pt-20 flex-grow">
                    <div className="info-text text-center">
                        <h1 className="head">Smile and sip</h1>
                        <h1>Signature taste you’ll love</h1>
                        <h1>each time</h1>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex h-full bg-[#7c4d37]">
                    <div className="w-1/2 flex justify-center items-center ">
                        <img className=" rounded-3xl object-cover" src="/assets/main/info.jpg" alt="" />
                    </div>
                    <div className="w-1/2  h-full ">
                        <div className="infosec-text ">
                            <h3 className="head my-4">Our Story</h3>
                            <h1 className="font-primary my-4">The Concept Of Tea Reimagined By Us</h1>
                            <p className="my-4">Euismod et duis phasellus varius. Accumsan nunc non congue tristique elementum condimentum?</p>
                        </div>
                        <div className="w-full h-96 grid grid-cols-2">
                            {
                                desc.map((items, index) => (
                                    <div key={index} className="flex justify-center items-center gap-8" >
                                        <Image width={50} height={50} src={items.src} />
                                        <div >
                                        <h1 className="font-bold font-mono text-4xl">{items.number}</h1>
                                        <p>{items.title}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Info
