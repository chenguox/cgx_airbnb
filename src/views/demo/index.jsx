import React, { memo, useState } from 'react'

import { DemoWrapper } from './style'
import PictureBrowser from '@/base-ui/demo'

const Demo = memo((props) => {
  const picture_urls = [
    'https://codercgx-1308086317.cos.ap-nanjing.myqcloud.com/cgx/202302142027706.jpg',
    'https://codercgx-1308086317.cos.ap-nanjing.myqcloud.com/cgx/202302142027692.jpg',
    'https://z1.muscache.cn/im/pictures/205f9323-ff95-4881-9cdf-8640da95035b.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/d34ab35b-14f7-4fa3-9b05-e4c68e982ced.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/28102836-5f34-4385-907b-d0874aac1a89.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/52823d6c-5067-4e5c-9c51-c14dfcdf72c0.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/f15c8bbc-f1f6-4a69-b8f2-0b32ca987438.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/f794c5be-d2a3-4734-8f68-f36b7728328d.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/9912ab53-6ea2-4108-90c1-89d0662cfa7c.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/23675f25-43d9-402b-b056-860c75df5803.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/b0b16961-dc6e-48aa-ba88-27d7e40229b0.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/ea884c1f-52ab-4731-b9c8-535fd9faecca.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/fa01288f-4dde-4738-a8a7-5b8179ea6eeb.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/f1da5348-8f16-48a2-9c6f-b4c52f0a488b.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/d4c1c453-7a32-4ce2-8e85-6cb913b447ed.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/00fb9994-d339-4a85-9723-1cea89cd5522.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/57a21f93-8078-49a4-ada4-abe1fd683a55.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/dce0c117-3f22-44ca-a4dc-e8de8618b4b8.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/e83431b8-54f9-43f2-80d9-a5539811029b.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/2bfb0f89-49e8-4af4-854d-3c019895e11f.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/b3f46a2d-4913-456d-afef-f0c579adcc17.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/7d29172e-aecf-4817-8257-820290ae3249.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/70792aad-5f95-412f-9023-9cc985d3dc24.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/c42769f4-9cb7-45d5-b034-1adfa0c6278e.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/ce0df85e-b378-46ab-bee7-3f6cb3520f2c.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/e31011c6-1f5b-4600-b5fc-57ff586c0d7e.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/51451c47-9f1b-4813-8bcb-2bf6de135c1e.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/5367bb14-e95a-407c-b022-28f0fd7f19d2.jpg?aki_policy=large',
    'https://z1.muscache.cn/im/pictures/4f3953cd-c1bb-4b92-8ed4-a12e06c532b5.jpg?aki_policy=large',
  ] // 模拟数据(图片数组)

  /** 定义组件内部的状态 */
  const [showBrowser, setShowBrowser] = useState(false)

  return (
    <DemoWrapper>
      <button onClick={(e) => setShowBrowser(true)}>显示图片</button>
      {showBrowser && (
        <PictureBrowser
          pictureUrls={picture_urls}
          closeClick={(e) => setShowBrowser(false)}
        />
      )}
    </DemoWrapper>
  )
})

export default Demo
