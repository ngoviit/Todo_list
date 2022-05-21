import { Box } from '@mui/system'
import React from 'react'
import { Outlet } from 'react-router-dom'

ProductFeatured.propTypes = {}

function ProductFeatured(props) {
  return (
    <Box pt={4}>
      <Outlet></Outlet>
    </Box>
  )
}

export default ProductFeatured
