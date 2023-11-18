import { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { getFilteredClients } from '../../../services/Client';
import { GetUsersDto } from '../../../types/dto/User';
import { UserDto } from '../../../types/dto/User';
import { defaultClient } from '../../../constants/user';
import { perPageItemCount } from '../../../constants/common';
import { USER_ROLE } from '../../../enums/user';

const useClientList = () => {
  const navigate = useNavigate();

  const [itemCount, setItemCount] = useState<number>(perPageItemCount[0])
  const [clients, setClients] = useState<UserDto[]>([defaultClient])
  const [searchQuery, setSearchQuery] = useState<string>('')

  const parameters: GetUsersDto = {
    name: 'a',
    userRole: USER_ROLE.ADMIN,
    sortItem: 'a',
    sortOrder: 1,
    pageSize:	itemCount,
    pageNumber:	1,
  }

  const query = useQuery(['clients'], () => getFilteredClients(parameters), {
    onSuccess: (res) => setClients(res.data.slice(0, itemCount))
  })
  const { data, isLoading } = query

  const handleSearch = (value: string) => {
    const filteredClients = clients.filter(client => `${client.firstName} ${client.lastName}`.includes(value))
    setClients(filteredClients)
    setSearchQuery(value)
  }

  const handleClearSeatch = () => {
    setClients(data || [])
  }

  const handleCreateNew = () => {
    navigate('/client/new');
  }

  const handleEdit = (client: any) => {
    navigate(`/client/${client.id}/edit`);
  }

  const handleDelete = (id: srtring) => {
    console.log(id)
  }

  const handlePerPageChange = (value: number) => {
    setClients(!!data ? data.data.slice(0, value) : [])
    setItemCount(value)
  }

  return {
    clients,
    isLoading,
    itemCount,
    perPageItemCount,
    handlePerPageChange,
    searchQuery,
    setSearchQuery,
    handleSearch,
    handleClearSeatch,
    handleCreateNew,
    handleEdit,
    handleDelete,
  }
}
  
export default useClientList