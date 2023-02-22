import { Avatar, Box, Card, ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const StoryBar = () => {
  return (
    <Card sx={{ marginLeft: 5, marginRight: 5 }}>
      <ImageList
        sx={{ width: '100%', height: 300, textAlign: 'center' }}
        cols={4}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <Avatar alt="Remy Sharp" variant="rounded" src="pic/Sabbir-1.jpg" />
          </ImageListItem>
        ))}
      </ImageList>
    </Card>
  )
}

const itemData = [
  {
    img: 'pic/Sabbir-1.jpg',
    title: 'Breakfast',
  },
  {
    img: 'pic/Sabbir-1.jpg',
    title: 'Burger',
  },
  {
    img: 'pic/Sabbir-1.jpg',
    title: 'Camera',
  },
  {
    img: 'pic/Sabbir-1.jpg',
    title: 'Coffee',
  },
]
export default StoryBar
