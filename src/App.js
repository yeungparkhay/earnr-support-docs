import React, { useState } from 'react'
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'
import parse from 'html-react-parser';
import moment from 'moment'

import topics from './data/topics'

const App = () => {
    
    const [searchPrompt, setSearchPrompt] = useState('')
    const [activeTopic, setActiveTopic] = useState('')
    const [activeArticle, setActiveArticle] = useState('')
    const [recentSearch, setRecentSearch] = useState('')
    
    const handlePromptChange = (event) => {
        setSearchPrompt(event.target.value)
        setRecentSearch('')
    }

    const handlePromptChangeAlt = (value) => {
        setSearchPrompt(value)
    }

    const handleTopicChange = (id) => {
        setActiveTopic(id)
    }
    
    const handleArticleChange = (id) => {
        setActiveArticle(id)
    }

    const handleRecentChange = (value) => {
        setRecentSearch(value)
    }

    return (
        <div className="bg-floralWhite">
            <Main prompt={searchPrompt} handlePromptChange={handlePromptChange} activeTopic={activeTopic} activeArticle={activeArticle} handleTopicChange={handleTopicChange} handleArticleChange={handleArticleChange} recentSearch={recentSearch} handleRecentChange={handleRecentChange} handlePromptChangeAlt={handlePromptChangeAlt} />
            <div className="h-auto w-full p-5 sm:p-9 py-7 flex justify-center">
                <div className="w-full lg:w-1024 h-auto">
                    <Collection activeTopic={activeTopic} handleTopicChange={handleTopicChange} activeArticle={activeArticle} handleArticleChange={handleArticleChange} searchPrompt={searchPrompt} />
                    <Topic activeTopic={activeTopic} handleTopicChange={handleTopicChange} activeArticle={activeArticle} handleArticleChange={handleArticleChange} searchPrompt={searchPrompt} />
                    <Article activeTopic={activeTopic} handleTopicChange={handleTopicChange} activeArticle={activeArticle} handleArticleChange={handleArticleChange} searchPrompt={searchPrompt} handleRecentChange={handleRecentChange}  />
                    <Search searchPrompt={searchPrompt} handleTopicChange={handleTopicChange} handleArticleChange={handleArticleChange} handlePromptChangeAlt={handlePromptChangeAlt} setRecentSearch={setRecentSearch} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

const Main = ({ prompt, handlePromptChange, handleArticleChange, handleTopicChange, recentSearch, handleRecentChange, handlePromptChangeAlt }) => {
    return (
        <div className="bg-gray-700 w-full h-auto p-5 pb-2 sm:p-9 sm:pb-2 pt-2 justify-center flex">
            <div className="w-full lg:w-1024">
                <div className="text-right">
                    <a href="https://www.earnr.co.uk/" className="space-x-1 hover:opacity-80">
                        <img src="./icons/back.png" className="h-3 inline" alt="Go back"/>
                        <div className=" text-white text-xs font-semibold mb-3 inline">Go to earnr.co.uk</div>
                    </a>                        
                </div>
                <img src="./logo.png" className="h-14 cursor-pointer pb-2" alt="earnr" onClick={() => (handleArticleChange(''), handleTopicChange(''), handleRecentChange(''), handlePromptChangeAlt(''))}/>
                <div className="text-xl text-white mt-2 pt-3 pr-3 border-t">Support guides and articles</div>
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
                        font-semibold
                        focus:bg-opacity-100 focus:text-gray-700
                        my-6
                    "
                    value={prompt}
                    onChange={handlePromptChange}
                    placeholder="How can we help?"
                />
                <Recent recentSearch={recentSearch} handlePromptChangeAlt={handlePromptChangeAlt} handleRecentChange={handleRecentChange}/>
            </div>
        </div>
    )
}

const Recent = ({ recentSearch, handleRecentChange, handlePromptChangeAlt }) => {
    if (recentSearch !== '') {
        return (
            <div className="text-gray-50 text-sm mb-4 hover:text-gray-300 cursor-pointer" onClick={() => (handlePromptChangeAlt(recentSearch), handleRecentChange(''))}>
                <span>Return to search results for: </span>
                <span className="font-semibold">{recentSearch}</span>
            </div>
        )
    }
    return (
        <div></div>
    )
}

const Collection = ({ handleTopicChange, activeTopic, activeArticle, searchPrompt }) => {
    if (activeTopic === '' && activeArticle === '' && searchPrompt==='' ) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {topics.map(topic => (
                    <div className="bg-white rounded h-auto p-6 drop-shadow-custom filter cursor-pointer hover:bg-gray-50 inline-block" onClick={() => handleTopicChange(topic.id)}>
                        <div className="flex">
                            <div className="flex justify-center pr-6 pt-3 w-20 text-xl">{topic.logo}</div>
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
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div></div>
    ) 
}

const Topic = ({ activeTopic, handleTopicChange, activeArticle, handleArticleChange, searchPrompt }) => {
    if (activeTopic !== '' && activeArticle === '' && searchPrompt === '') {
        const selectedTopic = topics.filter(topic => topic.id === Number(activeTopic))[0]
        
        return (
            <div>
                <div className="text-gray-500 text-sm mb-4">
                    <span className="cursor-pointer font-semibold " onClick={() => handleTopicChange('')}>earnr Support </span>
                    <span>  &gt;  {selectedTopic.title}</span>
                </div>
                <div className="bg-brand-light p-6 rounded">
                    <div className="flex">
                        <div className="flex justify-center pr-6 pt-3 w-20 text-xl">{selectedTopic.logo}</div>
                        <div>
                            <div className="text-3xl text-gray-800 font-semibold mb-3">{selectedTopic.title}</div>
                            <div className="text-gray-700 mb-2">{selectedTopic.subtitle}</div>
                            <div className="flex mb-8"> 
                                <img src={selectedTopic.authorImage} className="h-8 rounded-full" alt="team"/>
                                <div className="ml-3 text-gray-700 text-xs grid-rows-2">
                                    <div className="row-span-1">{selectedTopic.articles.length} articles in this topic</div>
                                    <div className="row-span-1">
                                        <span>Written by </span>
                                        <span>{selectedTopic.authors.map(author => author.name).join(", ")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {selectedTopic.articles.map(article => (
                        <div key={article.id}>
                            <div className="bg-white rounded w-full h-auto p-6 drop-shadow-custom filter cursor-pointer hover:bg-gray-50 mb-5" onClick={() => handleArticleChange(article.id)}>
                                <div className="text-lg text-brand font-semibold">{article.title}</div>
                                <div className="text-gray-500 mb-2">{article.subtitle}</div>
                                <div className="flex"> 
                                    <img src={article.authorImage} className="h-8 rounded-full" alt="team"/>
                                    <div className="ml-3 text-gray-500 text-xs grid-rows-2">
                                        <div className="row-span-1">Written by {article.author}</div>
                                        <div className="row-span-1">Updated on {moment(article.lastUpdated).format('D MMMM YYYY')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div></div>
    )
}

const Article = ({ activeTopic, handleTopicChange, activeArticle, handleArticleChange, searchPrompt, handleRecentChange }) => {
    if (activeTopic !== '' && activeArticle !== '' && searchPrompt === '') {
        const selectedTopic = topics.filter(topic => topic.id === Number(activeTopic))[0]
        const selectedArticle = selectedTopic.articles.filter(article => article.id === Number(activeArticle))[0]

        return (
            <div>
                <div className="text-gray-500 text-sm mb-4">
                    <span className="cursor-pointer font-semibold " onClick={() => (handleTopicChange(''), handleArticleChange(''), handleRecentChange(''))}>earnr Support </span>
                    <span>  &gt;  </span>
                    <span className="cursor-pointer font-semibold " onClick={() => (handleArticleChange(''), handleRecentChange(''))}>{selectedTopic.title}</span>
                    <span>  &gt;  {selectedArticle.title}</span>
                </div>
                <div className="bg-white p-6 py-10 rounded justify-center flex">
                    <div className="w-full md:w-768 space-y-6">
                        <div className="text-3xl text-gray-700 font-semibold">{selectedArticle.title}</div>
                        <div className="flex"> 
                            <img src={selectedArticle.authorImage} className="h-8 rounded-full" alt="team"/>
                            <div className="ml-3 text-gray-500 text-xs grid-rows-2">
                                <div className="row-span-1">Written by {selectedArticle.author}</div>
                                <div className="row-span-1">Updated on {moment(selectedArticle.lastUpdated).format('D MMMM YYYY')}</div>
                            </div>
                        </div>
                        <div className="text-gray-600">
                            {parse(selectedArticle.contents)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div></div>
    )
}

const Search = ({ searchPrompt, handleTopicChange, handleArticleChange, handlePromptChangeAlt, setRecentSearch }) => {
    
    const processedSearchPrompt = searchPrompt.replace('[^a-zA-Z\d\s]', '').toLowerCase()
    
    const articlesList = topics.map(topic => (
        topic.articles.map(article => ({
            "topicId": topic.id,
            "articleId": article.id,
            "topic": topic.title,
            "title": article.title,
            "contents": article.contents,
            "authorImage": article.authorImage,
            "author": article.author,
            "lastUpdated": article.lastUpdated
        }))
    )).flat().filter(article => article.contents.toLowerCase().search(processedSearchPrompt) !== -1 || article.title.toLowerCase().search(processedSearchPrompt) !== -1 || article.topic.toLowerCase().search(processedSearchPrompt) !== -1)

    if (searchPrompt !== '') {
        return (
            <div>
                {articlesList.map(article => (
                    <div className="bg-white rounded w-full h-auto p-6 drop-shadow-custom filter cursor-pointer hover:bg-gray-50 mb-5" onClick={() => (handleArticleChange(Number(article.articleId)), handleTopicChange(article.topicId), handlePromptChangeAlt(''), setRecentSearch(searchPrompt.replace(/\W/g, '')))} >
                        <div className="text-lg text-brand mb-2">{parse(article.title.replace(searchPrompt, '<b>' + searchPrompt + '</b>'))}</div>
                        <div className="flex"> 
                            <img src={article.authorImage} className="h-8 rounded-full" alt="team"/>
                            <div className="ml-3 text-gray-500 text-xs grid-rows-2">
                                <div className="row-span-1">Written by {article.author}</div>
                                <div className="row-span-1">Updated on {moment(article.lastUpdated).format('D MMMM YYYY')}</div>
                            </div>
                        </div>
                        <div className="mt-4 text-sm text-gray-600">{parse(article.contents.substring(0,300).replace(/<[^>]*>?/gm, '').replace(searchPrompt, '<b>' + searchPrompt + '</b>'))}</div>
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div></div>
    )
    
}

const Footer = () => {
    return (
        <div className="w-full h-60 bg-white p-10">
            <div className="w-full h-full text-center space-y-8">
                <img src="./logo_light.png" className="h-6 inline" alt="earnr" />                
                <span className="inline text-gray-400 text-xs font-semibold"> | Support Centre </span>
                <div className="w-full text-gray-500 text-sm mb-3 font-semibold text-center">
                    <a href="http://earnr.co.uk">Go to earnr.co.uk</a>
                </div>
            </div>      
        </div>
    )
}


export default App