import { a } from "@/data"

export default function CardProducts() {
    return (
        <div className="flex overflow-x-hidden space-x-4 p-4">
            {a.map((item, index) => (
                <div className="swapper-card-container">
                    <div key={index} className="swapper-card flex-none">
                        <img src={item.image} alt={item.title} className="card-image" />
                        <div className="swapper-card-information">
                            <div className="swapper-card-title">{item.title}</div>
                            <div className="swapper-card-description">{item.description}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}