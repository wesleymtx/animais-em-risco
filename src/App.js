import './styles/App.css'
import React, { useState, useEffect } from 'react';
import Card from './components/Card'
import Pagination from './components/Pagination'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios';
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);


useEffect(() => {
  const api = async () => {
    setLoading(true);
    const res = await axios.get('http://www.mocky.io/v2/5c2f6da1320000b52859082f');
    setPosts(res.data.animais.sort((a,b)=>{
      if(a.nome>b.nome)
        return 1;
      if(a.nome<b.nome)
        return -1
      return 0
    }))
    setLoading(false);
  }
  api()
},[])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

return (
  <div className="app-container">
    <Header/>
    <Card posts={currentPosts}/>
    <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    <Footer/>
    
  </div>
);
}
export default App;
