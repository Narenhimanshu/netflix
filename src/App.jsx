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
  {
    id:10,
    title:"Spiderman",
    rating:5.1,
    category:"Action",
    imageUrl:"./spiderman.jpg"
  },
  {
    id:11,
    title:"Ironman",
    rating:4.8,
    category:"Superhit",
    imageUrl:"./ironman.jpg"
  },
  {
    id:12,
    title:"Gost",
    rating:4.9,
    category:"Hit",
    imageUrl:"./gost.jpg"
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
    
      <h1 className="md:text-xl text-[17px] text-white font-bold md:mt-12 mt-6 md:mb-6 mb-3 md:ml-25 ml-9 italic">Trending Now</h1>

    {/* grid layout */}
    
    <div className="grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-4 md:px-32 px-3 md:mt-6 mt-3 ">
    {movies.map((movie)=>(
      <MoviesCard 
      key={movie.id}
      title={movie.title} 
      rating={movie.rating} 
      category={movie.category} 
      imageUrl={movie.imageUrl}/>
    ))}
    </div>
    <div className="h-full w-full  text-white md:mt-14 mt-10 md:px-32 px-4">
      <p className="md:text-xl text-[17px] font-semibold"> Frequently Asked Questions</p>
      {questions.map((question)=>(
        <Question
        key={question.id}
        paragraph={question.paragraph}
        />
      ))}
    </div>

    </div>
  )
}

export default App