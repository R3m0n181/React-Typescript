type CardProps = {
    name: string;
    description: string; 
    cost: number;
    imgUrl: string;
    details: string;
  };


const D_card = ({name, description, cost, imgUrl, details}: CardProps) => {
  return (
<div className="w-full max-w-screen overflow-hidden bg-gray-200 rounded-lg shadow-xl dark:bg-gray-800">
    <img className="object-cover object-center w-full h-56" src={imgUrl} alt="Mountain and sea area"></img>

    <div className="px-4 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>
        
        <div className="items-center mt-4 text-gray-700 dark:text-gray-200">
            <h1 className="px-2 text-sm">{details}</h1>
        </div>

        <div className="items-center mt-4 text-gray-700 text-lg dark:text-gray-200 dark:font-semibold">
            <h1 className="px-2 text-sm">{cost} BDT</h1>
        </div>        
    </div>
</div>
  )
}

export default D_card