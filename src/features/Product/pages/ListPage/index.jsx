import { ThemeProvider } from '@emotion/react'
import { makeStyles } from '@material-ui/styles'
import {
  Box,
  Container,
  createTheme,
  Grid,
  Pagination,
  Paper,
  Typography,
} from '@mui/material'
import productApi from 'api/productApi'
import ProductList from 'features/Product/components/ProductList'
import ProductSleletonsList from 'features/Product/components/ProductSleletonsList'
import React, { useEffect, useState } from 'react'

const useStyle = makeStyles({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: 1,
  },
})

ListPage.propTypes = {}
const theme = createTheme()

function ListPage(props) {
  const [productList, setProductList] = useState([])
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 10,
  })
  const [loading, setLoading] = useState(true)
  const [filters, setfilters] = useState({ _page: 1, _limit: 9 })

  const classes = useStyle()
  useEffect(() => {
    ;(async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters)
        console.log(data, pagination)
        setPagination(pagination)
        setProductList(data)
      } catch (error) {
        console.log('lỗi fetch', error)
      }
      setLoading(false)
    })()
  }, [filters])

  const handlePageChange = (e, page) => {
    setfilters(previFilter => ({
      ...previFilter,
      _page: page,
    }))
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Container>
          <Grid container spacing={1}>
            <Grid item className={classes.left}>
              <Paper elevation={0}>Left</Paper>
            </Grid>
            <Grid item className={classes.right}>
              <Paper elevation={0}>
                {loading ? (
                  <ProductSleletonsList></ProductSleletonsList>
                ) : (
                  <ProductList data={productList}></ProductList>
                )}
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default ListPage
