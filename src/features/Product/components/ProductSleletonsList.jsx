import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
ProductSleletonsList.propTypes = {
  length: PropTypes.number,
}
ProductSleletonsList.defaultProps = {
  length: 6,
}
function ProductSleletonsList({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box padding={1}>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProductSleletonsList
