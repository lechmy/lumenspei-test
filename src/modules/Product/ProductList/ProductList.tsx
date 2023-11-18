import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronUpDownIcon, PencilSquareIcon, TrashIcon, UserPlusIcon } from '@heroicons/react/20/solid'
import cx from 'classnames'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import useProductList from './useProductList'

const ProductList: React.FC = () => {
  const { 
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
  } = useProductList()

  return (
    <section>
      <div className='flex justify-between items-center al my-4'>
        <Button className="ml-2" onClick={handleCreateNew}>
          <UserPlusIcon className="h-5 w-5" aria-hidden="true" title="Add new Product"/>
        </Button>
        <Input
          name="search"
          value={searchQuery}
          placeholder="search"
          className='ml-2 sm:w1/2'
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {!isLoading && (
        <ul role="list" className="divide-y divide-gray-100 mt-4">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between flex-col md:flex-row gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{product.name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.description}</p>
                </div>
              </div>
              <div className="flex shrink-0 items-center mt-2 md:mt-0">
                <p className="text-sm leading-6 text-gray-900">${product.price}</p>
                <Button className="ml-2" onClick={() => handleEdit(product)}>
                  <PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
                </Button>
                <Button className="ml-2" onClick={() => handleDelete(product)}>
                  <TrashIcon className="h-5 w-5" aria-hidden="true" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-between">
        <div>
          {/* paggination */}
        </div>
        <Listbox value={itemCount} onChange={handlePerPageChange}>
          {({ open }) => (
            <div className="flex items-center">
              <Listbox.Label className="block mr-2 text-sm font-medium leading-6 text-gray-900">Items per page: </Listbox.Label>
              <div className="relative w-24">
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{itemCount}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {perPageItemCount.map((item, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          cx(
                            active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={cx(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                              >
                                {item}
                              </span>
                            </div>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </div>
          )}
      </Listbox>
      </div>
    </section>
  )
}

export default ProductList