import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  // console.log(dummy, "dummy from menu list");
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // handle add item, dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="p-2 m-2 border-gray-100 border-b-2 text-left flex"
        >
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 shadow-lg bg-black rounded-lg mx-6 text-white"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={item.image}></img>
          </div>
          <div className="w-9/12">
            <div className="flex justify-between py-2">
              <span className="">{item.name}</span>
              <span>{item.price} AED</span>
            </div>
            <p className="text-xs">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
