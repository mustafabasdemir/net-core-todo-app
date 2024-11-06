function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="container  m-4">
          <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-12 sm:col-span-4">
                <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14  absolute bottom-4 right-3 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>

                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                    20
                  </div>
                  <div className="text-sm text-gray-500">Components</div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14  absolute bottom-4 right-3 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <div className="flex justify-between items-center ">
                    <i className="fab fa-behance text-xl text-gray-400"></i>
                  </div>
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                    99
                  </div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14  absolute bottom-4 right-3 text-yellow-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <div className="flex justify-between items-center ">
                    <i className="fab fa-codepen text-xl text-gray-400"></i>
                  </div>
                  <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
                    50
                  </div>
                  <div className="text-sm text-gray-500">Pen Items</div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                <div className="">
                  <div className="text-center p-5 flex-auto justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 -m-1 flex items-center text-blue-400 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-16 h-16 flex items-center text-gray-600 mx-auto"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" />
                    </svg>
                    <h2 className="text-xl font-bold py-4 text-gray-200">
                      Are you sure?
                    </h2>
                    <p className="text-sm text-gray-500 px-8">
                      Do you really want to delete your account? This process
                      cannot be undone
                    </p>
                  </div>
                  <div className="p-3  mt-2 text-center space-x-4 md:block">
                    <button className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300">
                      Cancel
                    </button>
                    <button className="bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                          alt="aji"
                          className=" relative w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3">
                        <div className="font-medium leading-none text-gray-100">
                          Aji
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1">
                          UI/UX Designer
                        </p>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"></path>
                      </svg>
                    </a>
                    <a
                      hrf="#"
                      className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 ml-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3 min-w-0">
                        <div className="font-medium leading-none text-gray-100">
                          Groupname
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                          Beautiful hand-crafted SVG icons
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                      <span className="text-xs text-gray-500 text-right mb-1">
                        9:02pm
                      </span>
                      <div className="flex">
                        <a className="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" />
                          </svg>
                        </a>
                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-100 bg-green-400 rounded-full ml-2">
                          99
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="inline-flex w-12 h-12">
                        <img
                          src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl"
                        />
                        <span className="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75"></span>
                        <span></span>
                      </div>

                      <div className="flex flex-col ml-3 min-w-0">
                        <div className="font-medium leading-none text-gray-100">
                          Ajimon
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                          Jul 066, 2021, 8.25 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                      <div className="flex">
                        <h5 className="flex items-center font-medium text-gray-300 mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>{" "}
                          1800
                        </h5>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-400 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 bg-gray-800 border border-gray-800 shadow-md hover:text-green-500 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mr-auto">
                      <div className="-space-x-5 flex ">
                        <img
                          src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800"
                        />
                        <img
                          src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                          alt="aji"
                          className=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800 shadow"
                        />
                      </div>

                      <div className="flex flex-col ml-3 min-w-0">
                        <div className="font-medium leading-none text-gray-100">
                          Pending Request{" "}
                        </div>
                        <p className="text-sm text-gray-500 leading-none mt-1 truncate">
                          Jul 066, 2021, 8.25 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col ml-3 min-w-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
