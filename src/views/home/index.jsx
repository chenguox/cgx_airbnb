import React, { memo, useState, useEffect } from 'react'

import gxRequest from '@/services'

const Home = memo(() => {
  const [highStore, setHighStore] = useState({})

  useEffect(() => {
    gxRequest
      .get({
        url: '/home/highscore',
      })
      .then((res) => {
        console.log(res)
        setHighStore(res)
      })
  }, [])

  return (
    <div>
      <ul>
        {highStore.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
})

export default Home
