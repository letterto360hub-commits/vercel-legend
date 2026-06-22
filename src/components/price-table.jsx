import React, { useState } from 'react'
import { Jost } from "next/font/google";


const jost = Jost({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "700", "900"],
});
const PriceTable = ({data}) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {

        console.log("called")
        setIsOpen(true)
    }
    return (
        <div>
            <div className="lg:col-span-2 py-12 flex flex-col gap-8 items-center justify-center px-4">
                <div className="relative flex gap-4 items-center justify-center">

                    <h2
                        className={`${jost.className} text-primary text-3xl lg:text-4xl font-medium tracking-wide uppercase pb-8`}
                    >
                        Price Table
                    </h2>
                    {/* <h1 class="text-3xl text-center green-text font-bold">Price <span class="text-gray-600">Table</span></h1> */}

                </div>
                <table className="border border-gray-100 rounded-md overflow-hidden shadow-lg hidden lg:table">
                    <thead>
                        <tr className="border-b border-b-gray-300 uppercase">
                            {/* <th className="bg-gray-100 px-4 py-2 border-r border-r-gray-300 font-bold"> Type </th>
                            <th className="bg-gray-100 px-4 py-2 border-r border-r-gray-300 font-bold"> Unit Type </th>
                            <th className="bg-gray-100 px-4 py-2 border-r border-r-gray-300 font-bold"> Built-Up Area </th>
                            <th className="bg-gray-100 px-4 py-2 border-r border-r-gray-300 font-bold"> Price Per Sq.ft.  </th>

                            <th className="bg-gray-100 px-4 py-2 border-r border-r-gray-300 font-bold"> Price </th> */}
                            {data.priceTable && data.priceTable.typeDetails.map((item,idx)=>(
                               <th className="bg-gray-100 px-4 py-2 border-r border-r-gray-300 font-bold"> {item} </th> 
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-b-gray-300">
                           {data.priceTable && data.priceTable.description.map((item,idx)=>(
                             <th className="bg-white px-4 py-2 border-r border-r-gray-300 font-medium">{item}</th>
                           ))}
                        </tr>
                    </tbody>
                </table>
                <p className='text-xs'>*Price mention is basic cost.</p>
                <table className="border border-gray-100 rounded-md overflow-hidden shadow-lg table lg:hidden">
                    <tbody>
                       {data.priceTable.mob.map((item,idx)=>(
                        <tr className="border-b border-b-gray-300">
                        <td className="bg-gray-100 px-4 py-2 border-r border-r-gray-300 font-bold"> {item.mobType} </td>
                        <td className="bg-white px-4 py-2 border-r border-r-gray-300"> {item.mobDescription} </td>
                    </tr>
                       ))}
                        
                        
                    </tbody>
                </table>
                {/* <button onClick={handleOpen} className="primary-btn px-4 py-2 animate-grow lg:w-1/4 rounded-md">
                    Enquire Now
                </button> */}
            </div>
            {/* {isOpen && <MyPopupComponent isOpen={isOpen} setIsOpen={setIsOpen} />} */}
        </div>
    )
}

export default PriceTable
