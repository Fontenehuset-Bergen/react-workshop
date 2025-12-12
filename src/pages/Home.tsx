import { useState, } from 'react'
import '../assets/styles/example.css'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import AssignmentsPage from '../components/pages/Assignments'
import HomePage from '../components/pages/HomePage'
import ReadmePage from '../components/pages/Readme'


export default function App() {

  const [currentPage, setCurrentPage] = useState("Home")
  const renderPage = () => {
    switch (currentPage) {
      case "Home": return <HomePage />
      case "Assignments": return <AssignmentsPage />
      case "Readme": return <ReadmePage />
      default: return <HomePage />
    }
  }


  return (
    <>
      <div className='homepage'>
        <Header setCurrentPage={setCurrentPage} />

        {renderPage()}

        <Footer />
      </div>
    </>
  )
}

