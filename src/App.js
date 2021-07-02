import React, { useState } from 'react'
import topics from './data/topics'
import parse from 'html-react-parser';
import moment from 'moment'

const App = () => {
    const [searchPrompt, setSearchPrompt] = useState('')
    const [activeTopic, setActiveTopic] = useState('')
    const [activeArticle, setActiveArticle] = useState('')
    
    const handlePromptChange = (event) => {
        setSearchPrompt(event.target.value)
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

    return (
        <div className="bg-gray-100">
            <Main prompt={searchPrompt} handlePromptChange={handlePromptChange} activeTopic={activeTopic} activeArticle={activeArticle} handleTopicChange={handleTopicChange} handleArticleChange={handleArticleChange} />
            <div className="h-auto w-full p-5 sm:p-9 py-7 flex justify-center">
                <div className="w-full lg:w-1024 h-auto">
                    <Collection activeTopic={activeTopic} handleTopicChange={handleTopicChange} activeArticle={activeArticle} handleArticleChange={handleArticleChange} searchPrompt={searchPrompt} />
                    <Topic activeTopic={activeTopic} handleTopicChange={handleTopicChange} activeArticle={activeArticle} handleArticleChange={handleArticleChange} searchPrompt={searchPrompt} />
                    <Article activeTopic={activeTopic} handleTopicChange={handleTopicChange} activeArticle={activeArticle} handleArticleChange={handleArticleChange} searchPrompt={searchPrompt} />
                    <Search searchPrompt={searchPrompt} handleTopicChange={handleTopicChange} handleArticleChange={handleArticleChange} handlePromptChangeAlt={handlePromptChangeAlt} />
                </div>
            </div>
        </div>
    );
}

const Main = ({ prompt, handlePromptChange, activeTopic, activeArticle, handleArticleChange, handleTopicChange }) => {
    return (
        <div className="bg-gray-700 w-full h-auto p-5 pb-2 sm:p-9 sm:pb-2 pt-2 justify-center flex">
            <div className="w-full lg:w-1024">
                <div className="text-right">
                    <a href="https://www.earnr.co.uk/" className="space-x-1 hover:opacity-80">
                        <img src="./icons/back.png" className="h-3 inline" alt="Go back"/>
                        <div className=" text-white text-xs font-semibold mb-3 inline">Go back to earnr</div>
                    </a>                        
                </div>
                <img src="./logo.png" className="h-6 inline cursor-pointer" alt="earnr" onClick={() => (handleArticleChange(''), handleTopicChange(''))}/>                
                <span className="inline text-white text-xs"> | Support Centre </span>
                <Title activeTopic={activeTopic} activeArticle={activeArticle} />
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
                    value={prompt}
                    onChange={handlePromptChange}
                    placeholder="Search for articles..."
                />
            </div>
        </div>
    )
}

const Title = ({ activeTopic, activeArticle }) => {
    if (activeTopic === '' && activeArticle === '' ) {
        return (
            <div className="text-3xl text-white mt-6 pr-3">Answers to your questions from the earnr team</div>
        )
    }
    return (
        <div></div>
    )
        
}

const Collection = ({ handleTopicChange, activeTopic, activeArticle, searchPrompt }) => {
    if (activeTopic === '' && activeArticle === '' && searchPrompt==='' ) {
        return (
            <div>
                {topics.map(topic => (
                    <div className="bg-white rounded w-full h-auto p-6 drop-shadow-custom filter cursor-pointer hover:bg-gray-50 mb-5" onClick={() => handleTopicChange(topic.id)}>
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
                    <span className="cursor-pointer font-semibold " onClick={() => handleTopicChange('')}>All Collections </span>
                    <span>  &gt;  {selectedTopic.title}</span>
                </div>
                <div className="bg-gray-200 p-6">
                    <div className="flex">
                        <div className="flex justify-center pr-6 pt-3">
                            <img src={selectedTopic.logo.url} className="h-8 inline col-span-1 mx-2" alt={selectedTopic.logo.alt}/>
                        </div>
                        <div>
                            <div className="text-3xl text-gray-800 mb-3">{selectedTopic.title}</div>
                            <div className="text-gray-500 mb-2">{selectedTopic.subtitle}</div>
                            <div className="flex mb-8"> 
                                <img src={selectedTopic.authorImage} className="h-8 rounded-full" alt="team"/>
                                <div className="ml-3 text-gray-500 text-xs grid-rows-2">
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

const Article = ({ activeTopic, handleTopicChange, activeArticle, handleArticleChange, searchPrompt }) => {
    if (activeTopic !== '' && activeArticle !== '' && searchPrompt === '') {
        const selectedTopic = topics.filter(topic => topic.id === Number(activeTopic))[0]
        const selectedArticle = selectedTopic.articles.filter(article => article.id === Number(activeArticle))[0]

        return (
            <div>
                <div className="text-gray-500 text-sm mb-4">
                    <span className="cursor-pointer font-semibold " onClick={() => (handleTopicChange(''), handleArticleChange(''))}>All Collections </span>
                    <span>  &gt;  </span>
                    <span className="cursor-pointer font-semibold " onClick={() => handleArticleChange('')}>{selectedTopic.title}</span>
                    <span>  &gt;  {selectedArticle.title}</span>
                </div>
                <div className="bg-white p-6 py-10 rounded justify-center flex">
                    <div className="w-full md:w-768 space-y-6">
                        <div className="text-3xl text-gray-700">{selectedArticle.title}</div>
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

const Search = ({ searchPrompt, handleTopicChange, handleArticleChange, handlePromptChangeAlt }) => {
      
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
    )).flat().filter(article => article.contents.toLowerCase().search(searchPrompt.toLowerCase()) !== -1 || article.title.toLowerCase().search(searchPrompt.toLowerCase()) !== -1)

    if (searchPrompt !== '') {
        return (
            <div>
                {articlesList.map(article => (
                    <div className="bg-white rounded w-full h-auto p-6 drop-shadow-custom filter cursor-pointer hover:bg-gray-50 mb-5" onClick={() => (handleArticleChange(Number(article.articleId)), handleTopicChange(article.topicId), handlePromptChangeAlt(''))} >
                        <div className="text-lg text-brand font-semibold  mb-2">{article.title}</div>
                        <div className="flex"> 
                            <img src={article.authorImage} className="h-8 rounded-full" alt="team"/>
                            <div className="ml-3 text-gray-500 text-xs grid-rows-2">
                                <div className="row-span-1">Written by {article.author}</div>
                                <div className="row-span-1">Updated on {moment(article.lastUpdated).format('D MMMM YYYY')}</div>
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



export default App