import { b } from "@/data"

export default function PricingCard() {
    return (
        <div className="py-18 w-full">
            <div className="w-full mt-8 grid lg:grid-cols-4 grid-cols-1 gap-10 cursor-default">
                {b.map((item, index) => (
                    <div key={index} className="bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1 shadow-xl hover:scale-110">
                        <div className="relative bg-slate-900/[0.] border backdrop-blur-xl flex items-center justify-center w-full h-full text-sm antialiased flex-1 text-black  rounded-lg">
                            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                                {item.icon && <item.icon className="lg:w-32 md:w-20 w-16 text-4xl" />}
                                <div className="lg:ms-5">
                                    <div className="text-start text-xl md:text-2xl font-bold">{item.title}</div>
                                    <p className="text-start text-white-100 mt-3 font-semibold">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}