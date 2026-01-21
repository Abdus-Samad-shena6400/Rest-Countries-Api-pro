import { useEffect, useState } from 'react'
import Search from './Component/Search'
import Header from './Component/Header'
import Countries from './Component/Countries'
import CountryDetail from './Component/CountryDetail'
import { Routes, Route } from 'react-router-dom'


import './App.css'


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allCountries , setAllCountries]=useState([])
  const [filterdcountries,setFilteredCountries]=useState([])
  const [region, setRegion]=useState("")
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  
  useEffect((e)=>{
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,borders').then(res=>{
      if(!res.ok){
        throw Error('could not fetch the data for that resource')
      }
      return res.json()
    }).then((data)=>{
      
      setAllCountries(data)
      setFilteredCountries(data)
    }).catch((Error)=>{
      console.error('Error fetching countries:',Error)
    })
  },[])

  useEffect((e)=>{
    const filtered = allCountries.filter((country) =>
      (country.name?.common || "").toLowerCase().includes(searchTerm.toLowerCase()) &&
      (region === "" || country.region === region)
    );
    setFilteredCountries(filtered)

  },[searchTerm,allCountries,region])

  useEffect(() => {
    // Apply theme class to body
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} region={region} setRegion={setRegion} />
              <Countries searchTerm={searchTerm} filterdcountries={filterdcountries} />
            </>
          }
        />
        <Route path="/country/:name" element={<CountryDetail allCountries={allCountries} />} />
      </Routes>
    </>
  )
}

export default App