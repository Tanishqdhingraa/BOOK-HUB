import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Foot'
import Course from '../components/Course'
import list from "../../public/list.json"
import BookCards from '../components/bookCards'


const Courses = () => {
  console.log(list);

  return (
    <div>
      <Navbar />
      <Course />

      <BookCards />
      <Footer />
    </div>
  )
}

export default Courses
