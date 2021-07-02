import React from 'react';

const App = () => {
    return (
        <div className="bg-gray-100">
            <div className="bg-gray-700 w-full h-auto p-4 justify-center flex justify-center">
                <div className="w-full lg:w-1024">
                    <div className="text-right space-x-2">
                        <img src="./back.png" className="h-4 inline" alt="Go back"/>
                        <div className=" text-white text-sm mb-3 inline">Go back to earnr</div>
                    </div>                
                    <img src="./logo.png" className="h-6 inline" alt="earnr"/>
                    <span className="inline text-white text-sm"> | Support Centre </span>
                    <div className="text-3xl text-white mt-6">Advice and answers from the earnr team</div>
                    <input
                        type="text"
                        className="
                            rounded
                            w-full
                            h-16
                            mt-6
                            px-6
                            bg-white
                            text-white
                            bg-opacity-25
                            hover:bg-opacity-30
                            text-lg
                            focus:bg-opacity-100 focus:text-gray-700
                            my-6
                        "
                        placeholder="Search for articles..."
                    />
                </div>
            </div>
            <div className="h-auto w-full p-4">
                <Topics />
            </div>
        </div>
    );
}

const Topics = ({ topics }) => {
    return (
        <div></div>
    )
}

export default App