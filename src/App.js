import Sidebar from './components/SideBar/Sidebar'
import Feed from './components/FeedsNews/Feed'
import Rightbar from './components/LeftBar/Rightbar'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import Navbar from './components/Navbar/Navbar'

import { useState } from 'react'
import Layout from './Routes/Layout'

function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />

         <Layout/>

          {/* <Feed /> */}

          <Rightbar />
        </Stack>
   
      </Box>
    </ThemeProvider>
  )
}

export default App
