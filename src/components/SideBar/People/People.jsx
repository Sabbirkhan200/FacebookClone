
import { AccountCircle, Search } from '@mui/icons-material'
import { Box, Stack, Skeleton, CardHeader, FormControl, InputLabel, NativeSelect, Typography, TextField, InputAdornment, Grid, Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import RecipeReviewCard from './CardHeader'


const People = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, [300])

  return (
 <Box flex={6} p={{ xs: 0, md: 2 }}>
    {loading ? (
      <Stack spacing={1} >
        <Skeleton variant="text" height={100} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="rectangular" height={300} />
      </Stack>
    ) : (
        <>

        <Grid container rowSpacing={0} columns={{ xs: 4, sm: 8, md: 12 }}>
  <Grid item xs={4}>
  <CardHeader
        
        title="560 connection"
        subheader={<FormControl size='small'  >
 
  <NativeSelect
    defaultValue={0}
  
  >

    <option value={10}>Recent added</option>
    <option value={20}>Old Added</option>
    <option value={30}>Days age Added</option>
  </NativeSelect>
</FormControl>}
      />
  </Grid>

  <Grid item xs={8}>
  <TextField sx={{borderRadius:1  ,backgroundColor:'#e0e0e0',
  marginTop:5,width:{ xs: 200, sm: 400, md: 400 } }}
       
      
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
       size={'small'}
      />
  </Grid>
  </Grid>
       
<RecipeReviewCard/>
<RecipeReviewCard/>
<RecipeReviewCard/>
<RecipeReviewCard/>
<RecipeReviewCard/>
<RecipeReviewCard/>
<RecipeReviewCard/>
<RecipeReviewCard/>
<RecipeReviewCard/>
<RecipeReviewCard/>

      </>
    )}
  </Box>
  )
}

export default People