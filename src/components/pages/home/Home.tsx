import { Box } from '@mui/material'
import React, { FC, useState } from 'react'
import { IPost } from '../../../Types'
import AddPost from './AddPost'
import { initialPosts } from './initialPosts'
import Posts from './Posts'

const Home: FC = () => {
  const [posts, setPosts] = useState<IPost[]>(initialPosts)
  return (
    <Box>
      <AddPost setPosts={setPosts} />
      <Posts posts={posts} />
    </Box>
  )
}

export default Home
