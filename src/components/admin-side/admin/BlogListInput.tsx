import React, { useEffect, useState } from "react";
import { IoTrashSharp } from "react-icons/io5";
import AdminButton from "../general/AdminButton";

type BlogListInputProps = {
  valuesList: string[];
  index: number;
  inputHandler: (index: number, value: string[]) => void;
};

const BlogListInput = ({
  valuesList,
  index,
  inputHandler,
}: BlogListInputProps) => {
  const [itemsList, setItemsList] = useState<string[]>(valuesList);

  const handleItemInput = (itemIndex: number, value: string) => {
    const updatedList = [...itemsList];
    updatedList[itemIndex] = value;
    setItemsList(updatedList);
  };

  const handleDeleteListItem = (itemIndex: number) => {
    setItemsList(prev => prev.filter((_, i) => i !== itemIndex));
  };
  const handleAddListItem = () => {
    setItemsList(prev => [...prev, ""]);
  };

  useEffect(() => {
    inputHandler(index, itemsList);
  }, [itemsList]);

  return (
    <>
      <div className="w-full flex flex-col">
        {valuesList.map((listItem: string, itemIndex: number) => (
          <div
            key={itemIndex}
            className="flex bg-gray-300 px-2 py-2 rounded-lg items-start w-full gap-2 mt-2">
            <input
              type="text"
              placeholder="List item"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block px-4 py-2"
              value={listItem}
              onChange={e => handleItemInput(itemIndex, e.target.value)}
            />
            <button
              type="button"
              onClick={() => handleDeleteListItem(itemIndex)}
              className="p-1 rounded-lg text-red-500 hover:bg-gray-400">
              <IoTrashSharp className="w-6 h-6" />
            </button>
          </div>
        ))}
        <AdminButton
          type="button"
          text="+ List Item"
          size="small"
          className="uppercase mt-2 self-center my-2"
          onClick={handleAddListItem}
        />
      </div>
    </>
  );
};

export default BlogListInput;
