

const Item = ({ event }) => {
    return(
        <div className="flex gap-5 items-center">
            <span className="bg-gray-500 text-gray-800 rounded-lg
            h-16 w-16 font-bold text-center p-2">{event.date}</span>

            <div>
                <h1 className="text-xl font-bold">{event.title}</h1>
                <p className="text-gray-400">{event.description}</p>
            </div>
        </div>
    );
};


export default Item;