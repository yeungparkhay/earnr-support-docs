import React from 'react';
import topics from './data/topics'

const App = () => {
    return (
        <div className="bg-gray-100">
            <div className="bg-gray-700 w-full h-auto p-5 pb-2 sm:p-9 sm:pb-2 pt-2 justify-center flex">
                <div className="w-full lg:w-1024">
                    <div className="text-right">
                        <a href="https://www.earnr.co.uk/" className="space-x-1 hover:opacity-80">
                            <img src="./icons/back.png" className="h-3 inline" alt="Go back"/>
                            <div className=" text-white text-xs font-semibold mb-3 inline">Go back to earnr</div>
                        </a>                        
                    </div>                
                    <img src="./logo.png" className="h-6 inline" alt="earnr"/>
                    <span className="inline text-white text-xs"> | Support Centre </span>
                    <div className="text-3xl text-white mt-6 pr-3">Answers to your questions from the earnr team</div>
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
            <div className="h-auto w-full p-5 sm:p-9 py-7 flex justify-center">
                <div className="w-full lg:w-1024 h-auto space-y-5">
                    {topics.map(topic => (
                        <Collection topic={topic} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const Collection = ({ topic }) => {
    return (
        <div className="bg-white rounded w-full h-auto p-6 drop-shadow-custom filter">
            <a href={topic.url}>
                <div className="flex">
                    <div className="flex justify-center pr-6 pt-3">
                        <img src={topic.logo.url} className="h-8 inline col-span-1 mx-2" alt={topic.logo.alt}/>
                    </div>
                    <div>
                        <div className="text-lg text-brand font-semibold">{topic.title}</div>
                        <div className="text-gray-500 mb-2">{topic.subtitle}</div>
                        <div className="flex"> 
                            <img src={topic.authorImage} className="h-8 rounded-full" alt="team"/>
                            <div className="ml-3 text-gray-500 text-xs grid-rows-2">
                                <div className="row-span-1">{topic.articles.length} articles in this topic</div>
                                <div className="row-span-1">
                                    <span>Written by </span>
                                    <span>{topic.authors.map(author => author.name).join(", ")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default App