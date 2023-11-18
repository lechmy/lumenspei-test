import { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { GetProductsDto, ProductDto } from '../../../types/dto/Products';
import { getFilteredProducts } from '../../../services/Product';
import { perPageItemCount } from '../../../constants/common';
import { defaultProduct } from '../../../constants/product';

const useProductList = () => {
  const navigate = useNavigate();

  const [itemCount, setItemCount] = useState<number>(perPageItemCount[0])
  const [products, setProducts] = useState<ProductDto[]>([defaultProduct])
  const [searchQuery, setSearchQuery] = useState<string>('')

  const parameters: GetProductsDto = {
    sortOrder: 1,
    pageSize:	itemCount,
    pageNumber:	1,
  }

  const query = useQuery(['products'], () => getFilteredProducts(parameters), {
    onSuccess: (res: any) => setProducts(res.data.slice(0, itemCount))
  })
  const { data, isLoading } = query

  const handleSearch = (value: string) => {
    const filteredProducts = products.filter(products => products.name.includes(value))
    setProducts(filteredProducts)
    setSearchQuery(value)
  }

  const handleClearSearch = () => {
    setProducts(data || [])
  }

  const handleCreateNew = () => {
    navigate('/product/new');
  }

  const handleEdit = (product: any) => {
    navigate(`/product/${product.id}/edit`);
  }

  const handleDelete = (product: any) => {
    console.log(product)
  }

  const handlePerPageChange = (value: number) => {
    setProducts(!!data ? data.data.slice(0, value) : [])
    setItemCount(value)
  }

  return {
    products,
    isLoading,
    itemCount,
    perPageItemCount,
    setItemCount,
    searchQuery,
    setSearchQuery,
    handlePerPageChange,
    handleSearch,
    handleClearSearch,
    handleCreateNew,
    handleEdit,
    handleDelete,
  }
}
  
export default useProductList