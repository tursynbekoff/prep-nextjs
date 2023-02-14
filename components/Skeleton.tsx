import React from 'react'

const Skeleton = () => {

  return (
    <>
      {
        [1, 2, 3].map((el : any) => (
          <div key={`${el}-skeleton`} className="w-[300px] animate-pulse flex flex-col border-2 rounded-lg border-gray-200 p-5 bg-white">
            <div className="flex justify-center">
              <span className="w-[256px] h-[256px] rounded-full bg-gray-300"></span>
            </div>
            <h2 className="font-bold text-xl mt-4 bg-gray-300">
              <span className="block h-[1.5rem] w-[256px]"></span>
            </h2>
            <p className=" overflow-hidden  bg-gray-300 mt-3">
              <span className="block h-[3.0rem] w-[256px]"></span>
            </p>
            <div className="flex justify-between mt-3 items-center">
              <div className="h-[1.5rem]  font-semibold text-semibold  bg-gray-300">
                <span className="block h-[1.5rem] w-[100px]"></span>
              </div>
              <button
                className="px-4 py-1 text-md font-semibold flex items-center bg-orange-500 rounded-full text-white hover:bg-orange-600"
                type='button'
                onClick={()=> {}}
                disabled
              >
                Choose
              </button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Skeleton