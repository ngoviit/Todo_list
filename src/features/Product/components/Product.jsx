import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { STATIC_HOST, THUMBNAIL_PLACHOLDER } from 'constants'
import { Skeleton, Typography } from '@mui/material'

Product.propTypes = {
  product: PropTypes.object,
}

function Product({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACHOLDER
  return (
    <Box padding={1}>
      <Box padding={1}>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize={16} fontWeight="bold" mr={1}>
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  )
}

export default Product
