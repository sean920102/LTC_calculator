import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import classNames from "classnames";
import LTCData, { I_Item } from "../LTCData/Data";
import { useLTCType } from "../context/LTCTypeContent";

interface BottomUpDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  dataId: string;
}
const BottomUpDialog: React.FC<BottomUpDialogProps> = ({
  isOpen,
  title,
  dataId,
  onClose,
}) => {
  const { level, burden, limit } = useLTCType();
  const fontsize = title.length > 10 ? false : true;

  let LevelData;
  let ItemData: I_Item[] = [];
  let IncomeType = 1;
  let quota = 0;

  switch (dataId) {
    case "Care":
    case "Transportation":
    case "Devices":
    case "RespiteServices":
    case "ShortServices":
    case "FoodServices":
      LevelData = LTCData[dataId].Level.filter((data) => {
        return data.Name == level || data.Name == "Normal";
      })[0];
      ItemData = LTCData[dataId].Item.filter((data) => {
        if (dataId == "ShortServices") {
          if (limit == "有外籍看護") return data;
          else return;
        }
        if (limit != "無") {
          return data.otherService;
        }
        return data;
      });

      if (burden == "一般戶") {
        IncomeType = LTCData[dataId].Burden.Normal;
      } else if (burden == "中低收入戶") {
        IncomeType = LTCData[dataId].Burden.Mid;
      } else {
        IncomeType = 1;
      }
      if (dataId == "Care") {
        if (limit == "有外籍看護" || limit == "有特別津貼") {
          quota = LevelData ? LevelData.Quota * 0.3 : 0;
        }
      } else {
        quota = LevelData ? LevelData.Quota : 0;
      }

      break;
  }

  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const totalPrice = Object.entries(quantities).reduce(
    (acc, [itemId, quantity]) => {
      const product = ItemData.find((p: any) => p.id === itemId);
      return acc + (product ? product.price * quantity : 0);
    },
    0
  );
  const totalPayself = Object.entries(quantities).reduce(
    (acc, [itemId, quantity]) => {
      const product = ItemData.find((p: any) => p.id === itemId);
      return acc + (product ? product.price * IncomeType * quantity : 0);
    },
    0
  );
  const remainingBalance = quota - totalPrice;

  const handleQuantityChange = (itemId: string, quantity: string) => {
    const quantityNum = parseInt(quantity, 10);
    if (quantityNum >= 0) {
      setQuantities({
        ...quantities,
        [itemId]: quantityNum,
      });
    } else {
      const { [itemId]: _, ...rest } = quantities;
      setQuantities(rest);
    }
  };
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-1 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-1 sm:translate-y-0 sm:scale-95"
          >
            <div className="fixed bottom-0 inset-x-0 pb-20 sm:pb-10 bg-white rounded-t-lg shadow-lg h-screen ">
              <div className="w-full h-[30%] tall:h-[25%] bg-primary">
                <div className="flex items-center justify-start">
                  <div className="px-4 pt-8 xs:pt-5 w-full">
                    <p
                      className={classNames({
                        "text-4xl": fontsize,
                        "text-3xl": !fontsize,
                        "font-medium": true,
                        "text-gray-200": true,
                      })}
                    >
                      {title}
                    </p>
                    <div className="h-sm:block h-xs:hidden">
                      <div className="flex flex-wrap mt-5">
                        <div className="w-full text-2xl font-medium">餘額</div>
                      </div>
                      <div className="flex flex-wrap mt-1">
                        <div className="w-full text-2xl font-medium">
                          ${Math.floor(remainingBalance)}
                        </div>
                      </div>
                      <div className="flex flex-wrap mt-5 ">
                        <div className="w-1/2 text-lg font-medium">
                          已使用額
                        </div>
                        <div className="w-1/2 text-lg font-medium">自付額</div>
                      </div>
                      <div className="flex flex-wrap mt-1">
                        <div className="w-1/2 text-lg font-medium">
                          ${Math.floor(totalPrice)}
                        </div>
                        <div className="w-1/2 text-lg font-medium">
                          ${Math.floor(totalPayself)}
                        </div>
                      </div>
                    </div>
                    <div className="h-sm:hidden h-xs:block">
                      <div className="flex flex-wrap mt-5">
                        <div className="w-1/3 text-lg font-medium">餘額</div>
                        <div className="w-1/3 text-lg font-medium">
                          已使用額
                        </div>
                        <div className="w-1/3 text-lg font-medium">自付額</div>
                      </div>
                      <div className="flex flex-wrap mt-1">
                        <div className="w-1/3 text-lg font-medium">
                          ${Math.floor(remainingBalance)}
                        </div>
                        <div className="w-1/3 text-lg font-medium">
                          ${Math.floor(totalPrice)}
                        </div>
                        <div className="w-1/3 text-lg font-medium">
                          ${Math.floor(totalPayself)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-[70%] overflow-y-auto">
                <section>
                  {ItemData.map((item: any) => (
                    <div className="flex flex-grow px-2 mt-2" key={item.id}>
                      <div className="w-1/3">
                        <p className="text-lg text-gray-800">{item.id}</p>
                        <p className="text-lg text-gray-800">{item.name}</p>
                      </div>
                      <div className="w-1/3 text-center">
                        <p className="text-lg text-gray-800">${item.price}</p>
                      </div>
                      <div className="w-1/3 text-center">
                        <p className="text-lg text-gray-800">
                          $
                          {quantities[item.id]
                            ? item.price * quantities[item.id]
                            : 0}
                        </p>
                        <input
                          type="number"
                          className="w-[100%] border bg-gray-50 border-gray-800 text-black"
                          min="0"
                          value={quantities[item.id] || ""}
                          onChange={(e) =>
                            handleQuantityChange(item.id, e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ))}
                </section>
              </div>
              <div className="xs:h-[25%] pt-2 px-10">
                <button
                  onClick={onClose}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BottomUpDialog;
