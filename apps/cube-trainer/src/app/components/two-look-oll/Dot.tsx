import React from 'react';

function Dot() {
  const solution = `F R U R' U' F' f R U R' U' f'`;
  return (
    <div className="w-auto inline-block">
      <div className="flex">
        <div id="left-side" className="flex flex-col justify-center">
          <div className="h-32 w-4 border-2 border-black bg-gray-300" />
          <div className="h-32 w-4 border-2 border-black bg-yellow-300" />
          <div className="h-32 w-4 border-2 border-black bg-gray-300" />
        </div>

        <div>
          <div id="top-side" className="flex">
            <div className="h-4 w-32 border-2 border-black bg-gray-300" />
            <div className="h-4 w-32 border-2 border-black bg-yellow-300" />
            <div className="h-4 w-32 border-2 border-black bg-gray-300" />
          </div>

          <div id="top-face">
            <div className="flex">
              <div className="h-32 w-32 border-2 border-black bg-gray-300" />
              <div className="h-32 w-32 border-2 border-black bg-gray-300" />
              <div className="h-32 w-32 border-2 border-black bg-gray-300" />
            </div>
            <div className="flex">
              <div className="h-32 w-32 border-2 border-black bg-gray-300" />
              <div className="h-32 w-32 border-2 border-black bg-yellow-300" />
              <div className="h-32 w-32 border-2 border-black bg-gray-300" />
            </div>
            <div className="flex">
              <div className="h-32 w-32 border-2 border-black bg-gray-300" />
              <div className="h-32 w-32 border-2 border-black bg-gray-300" />
              <div className="h-32 w-32 border-2 border-black bg-gray-300" />
            </div>
          </div>

          <div id="bottom-side" className="flex">
            <div className="h-4 w-32 border-2 border-black bg-gray-300" />
            <div className="h-4 w-32 border-2 border-black bg-yellow-300" />
            <div className="h-4 w-32 border-2 border-black bg-gray-300" />
          </div>
        </div>

        <div id="right-side" className="flex flex-col justify-center">
          <div className="h-32 w-4 border-2 border-black bg-gray-300" />
          <div className="h-32 w-4 border-2 border-black bg-yellow-300" />
          <div className="h-32 w-4 border-2 border-black bg-gray-300" />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <span className="text-2xl">{solution}</span>
      </div>
    </div>
  );
}

export default Dot;
