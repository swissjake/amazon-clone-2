
import Image from "next/image"
import Currency from 'react-currency-formatter'
import { StarIcon } from "@heroicons/react/solid"
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "../slices/basketSlice"

const CheckoutProduct = ({
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
    hasPrime,

}) => {
    const dispatch = useDispatch();

    const addItemToBasket = () =>{
        const product = {
            id,
            title,
            price,
             description,
            category,
             image,
            rating,
            hasPrime,
        }
        dispatch(addToBasket(product))
    }


    const removeItemFromBasket =() => {
        dispatch(removeFromBasket({id}))
    }
    return (
        <div className="grid grid-cols-5">
            <Image 
            src={image}
            width={200}
            height={200}
            objectFit="contain"
            alt="ye"
            />

            {/*Middle Section */}
            <div className="col-span-3 mx-5 border-b">
                    <p>{title}</p>
                    <div className="flex">
                        {Array(rating).fill().map((_, i)=> (
                                <StarIcon key={i} className="h-5 text-yellow-500" />
                         ))}
                    </div>
                    <p className="text-xs my-2 line-clamp-3">{description}</p>
                    <Currency quantity={price} currency="GBP" />
                    {hasPrime && (
                        <div className="flex items-center space-x-2">
                                 <img className="w-12" src="https://links.papareact.com/fdw" alt="prime" loading="lazy"/>
                                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                        </div>
                    )}

            </div>
                    {/*Add ANd Remove buttons */}  
                    <div className="flex flex-col space-y-2 my-auto justify-self-end border-b">
                        <button onClick={addItemToBasket} className="button">Add to Basket</button>
                        <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>
                    </div>
        </div>
    )
}

export default CheckoutProduct
