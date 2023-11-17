import { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import { getFilteredClients } from '../../../services/Client';
import { GetUsersDto } from '../../../types/dto/User';
import { UserDto } from '../../../types/dto/User';
import { defaultClient } from '../../../constants/user';

const useClientList = () => {
  const itemCount: number[] = [5, 10, 20, 50]
  const navigate = useNavigate();

  const [selected, setSelected] = useState<number>(itemCount[0])
  const [clients, setClients] = useState<UserDto[]>([defaultClient])
  const [searchQuery, setSearchQuery] = useState<string>('')

  const parameters: GetUsersDto = {
    sortOrder: 1,
    pageSize:	selected,
    pageNumber:	1,
  }

  const query = useQuery(['clients'], () => getFilteredClients(parameters).then(data => setClients(data)))
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

  const handleDelete = (client: any) => {
    console.log(client)
  }

  return {
    clients,
    isLoading,
    itemCount,
    selected,
    setSelected,
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