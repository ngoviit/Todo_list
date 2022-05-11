import React from 'react'
import Albumlist from './components/Albumlist'

function AlbumFeature(props) {
  const albumlist = [
    {
      id: 1,
      name: 'Todays V-Pop Hits',
      thumbnaiUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/7/4/5/a74596d697a2d48cb0cbda075e16278f.jpg',
    },
    {
      id: 2,
      name: 'Todays V-Pop Hits',
      thumbnaiUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/5/0/4/0504198fa93f0ca39b00d3dc2f0a133a.jpg',
    },
    {
      id: 3,
      name: 'Todays V-Pop Hits',
      thumbnaiUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/2/0/6/4206954f64b74db8f540603ab9f82571.jpg',
    },
  ]
  return (
    <div>
      <h2>Có thế bạn sẽ thích đấy</h2>
      <Albumlist albumlist={albumlist}></Albumlist>
    </div>
  )
}

export default AlbumFeature
