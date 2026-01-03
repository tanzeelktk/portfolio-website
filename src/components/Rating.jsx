import { Star } from "lucide-react";

function Rating({ rating }) {
    return (
        <div className="flex items-center gap-2">
            {
                [1, 2, 3, 4, 5].map((i) => {
                    return (
                        <Star
                            id={i}
                            className={rating >= i ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                        />
                    )
                })
            }
        </div>
    )
}


export default Rating;