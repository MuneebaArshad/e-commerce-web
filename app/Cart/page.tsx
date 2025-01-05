import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="bg-gray-200 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
        <h1 className="text-2xl sm:text-3xl text-center lg:text-left">
          Your Shopping Cart
        </h1>
        <div className="grid grid-cols-1 gap-8 pt-10">
          {/* Product Section */}
          <div className="border-2 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
              <div className="col-span-2">
                <h1 className="text-lg font-semibold">Product</h1>
              </div>
              <h1 className="text-lg font-semibold text-center sm:text-right">
                Quantity
              </h1>
              <h1 className="text-lg font-semibold text-right">Total</h1>
            </div>
            <div className="mt-8 space-y-6">
              {/* Product 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                <div className="col-span-2 flex items-center">
                  <img
                    src="/images/Product Image.png"
                    alt="Graystone vase"
                    className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                  />
                  <div className="ml-6">
                    <h1 className="text-base sm:text-lg font-medium">
                      Graystone vase
                    </h1>
                    <p className="text-sm mt-2">
                      A timeless ceramic vase with a tri-color grey glaze.
                    </p>
                    <p className="mt-2 text-base font-semibold">£85</p>
                  </div>
                </div>
                <p className="text-center sm:text-right text-lg font-medium">
                  1
                </p>
                <p className="text-right text-lg font-medium">£85</p>
              </div>
              {/* Product 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                <div className="col-span-2 flex items-center">
                  <img
                    src="/images/Product Image 2.png"
                    alt="Basic white vase"
                    className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
                  />
                  <div className="ml-6">
                    <h1 className="text-base sm:text-lg font-medium">
                      Basic white vase
                    </h1>
                    <p className="text-sm mt-2">
                      Beautiful and simple, this is one for the classics.
                    </p>
                    <p className="mt-2 text-base font-semibold">£125</p>
                  </div>
                </div>
                <p className="text-center sm:text-right text-lg font-medium">
                  1
                </p>
                <p className="text-right text-lg font-medium">£125</p>
              </div>
            </div>
          </div>

          {/* Subtotal Section */}
          <div className="text-center sm:text-right">
            <div className="flex justify-between items-center">
              <h1 className="text-xl sm:text-2xl font-semibold">£210</h1>
            </div>
            <p className="text-sm mt-2">
              Taxes and shipping are calculated at checkout
            </p>
            <button className="bg-custom-purple h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
