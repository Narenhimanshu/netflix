import React from 'react'
import MoviesCard from './components/MoviesCard'
import Navbar from './components/Navbar'
import Question from './components/Question'
import QuestionDown from './components/QuestionDown'
// dummy data array

const movies=[
  {
    id:1,
    title:"Cyberpunk 2088",
    rating:4.8,
    category:"Sci-fi",
    imageUrl:"./sci-fi1.jpg"
  },
  {
    id:2,
    title:"Cyberpunk 2",
    rating:4.6,
    category:"Sci-fi",
    imageUrl:"./sci-fi2.jpg"
  },
  {
    id:3,
    title:"Best movie",
    rating:4.5,
    category:"Action",
    imageUrl:"./action1.jpg"
  },
  {
    id:4,
    title:"Drama",
    rating:4.4,
    category:"Thriller",
    imageUrl:"./thriller1.jpg"
  },
  {
    id:5,
    title:"Super",
    rating:4.2,
    category:"Dar",
    imageUrl:"./thriller2.jpg"
  },
  {
    id:6,
    title:"SuperDoperHit",
    rating:4.0,
    category:"Darawana",
    imageUrl:"./thriller3.jpg"
  },
  {
    id:7,
    title:"HitMovie",
    rating:4.1,
    category:"Thriller",
    imageUrl:"./thriller4.jpg"
  },
  {
    id:8,
    title:"Action",
    rating:4.5,
    category:"Action",
    imageUrl:"./action2.jpg"
  },
  {
    id:9,
    title:"Cyberpunk 2080",
    rating:4.1,
    category:"Thriller",
    imageUrl:"./thriller5.jpg"
  },
];

// for question

const questions=[
  {
    id:1,
    paragraph:"What is Netflix?"
  },
  {
    id:2,
    paragraph:"How much does does Netflix cost?"
  },
  {
    id:3,
    paragraph:"Where can I watch?"
  },
  {
    id:4,
    paragraph:"How do I cancel?"
  },
  {
    id:5,
    paragraph:"What can I watch on Netflix?"
  },
  {
    id:6,
    paragraph:"Is Netflix good for kids?"
  },
]

const  App= () =>{
  
  return (
    
    < div className="bg-gradient-to-b from-[#020b2a] to-black w-full ">

      <Navbar/>
    
      <h1 className="text-xl text-white font-bold mt-12 mb-6 ml-25 italic">Trending Now</h1>

    {/* grid layout */}
    {/* <p className="w-full h-[1px] bg-red-300 "></p> */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-32 mt-8 ">
    {movies.map((movie)=>(
      <MoviesCard 
      key={movie.id}
      title={movie.title} 
      rating={movie.rating} 
      category={movie.category} 
      imageUrl={movie.imageUrl}/>
    ))}
    </div>
    <div className="h-full w-full  text-white mt-14 px-32">
      <p className="text-xl font-semibold"> Frequently Asked Questions</p>
      {questions.map((question)=>(
        <Question
        key={question.id}
        paragraph={question.paragraph}
        />
      ))}
    </div>
    <div className="mt-10 flex flex-col justify-center items-center">
      <QuestionDown/>
    </div>
    </div>
  )
}

export default App