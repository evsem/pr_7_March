import React, { useEffect, useState } from 'react'
import PostService from './API/PostService'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import Pagination from './Components/Pagination/Pagination'
import { useFetching } from './Hooks/useFetching'
import { usePosts } from './Hooks/usePosts'
import './Style/App.css'
import LoaderBlack from './UI/LoaderBlack/LoaderBlack'
import { getPageCount } from './Utils/forPages'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language' },
    { id: 2, title: 'Python', body: 'Programming language' },
    { id: 3, title: 'C', body: 'Programming language' },
    { id: 4, title: 'Kotlin', body: 'Programming language' },
    { id: 5, title: 'Ruby', body: 'Programming language' },
  ])
  let [filter, setFilter] = useState({ sort: '', query: '' })
  let searchedAndSelectedPosts = usePosts(posts, filter.sort, filter.query)
  let [totalCount, setTotalCount] = useState()
  let [limit, setLimit] = useState(10)
  let [page, setPage] = useState(1)

  let [fetchPosts, isPostLoading, errorInPost] = useFetching(async () => {
    let response = await PostService.getAll(limit, page)
    setPosts(response.data)
    let fetchTotalCount = response.headers['x-total-count']
    setTotalCount(getPageCount(fetchTotalCount, limit))
  })
  const changePage = (page) => {
    setPage(page)
  }
  useEffect(() => {
    fetchPosts()
  }, [page])

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />
      <Filter filter={filter} setFilter={setFilter} />

      {isPostLoading ? (
        <LoaderBlack />
      ) : (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      )}
      <Pagination changePage={changePage} totalCount={totalCount} />
    </div>
  )
}

export default App
