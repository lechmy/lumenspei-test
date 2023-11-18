import { ProductDetailsProps } from "../../../types/props/ProductDetailsProps"
import Input from "../../../components/Input/Input"
import Textarea from "../../../components/Textarea/Textarea"
import Button from "../../../components/Button/Button"
import useProductDetails from "./useProductDetails"

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
  const {
    canEdit,
    product,
    productType,
    handleChange,
    handleCancel,
    handleDelete,
    onSubmit,
  } = useProductDetails(props)

  return (
    <section className="mt-6">
      <form onSubmit={onSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-6">
            <div className="flex justify-between">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
              {canEdit && <Button type="button" className="bg-red-400 hover:bg-red-600" onClick={() => handleDelete(product)}>Delete</Button>}
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <Input name="id" className="hidden" value={product?.id} onChange={() => {}} />
              <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Name *
                </label>
                <div className="mt-2">
                  <Input
                    name="name"
                    id="name"
                    type="text"
                    required
                    placeholder="Product Name"
                    value={product?.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="sku" className="block text-sm font-medium leading-6 text-gray-900">
                  SKU *
                </label>
                <div className="mt-2">
                  <Input
                    name="sku"
                    id="sku"
                    type="text"
                    required
                    placeholder="SKU"
                    value={product?.sku}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <Textarea 
                    id="description"
                    name="description"
                    rows={3}
                    placeholder="description"
                    value={product?.description}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Price
                </label>
                <div className="mt-2">
                  <Input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Product Price"
                    value={product?.price}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                  Product quantity
                </label>
                <div className="mt-2">
                  <Input
                    id="quantity"
                    name="quantity"
                    type="text"
                    
                    placeholder="Product quantity"
                    value={product?.quantity}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Product unit 
                </label>
                <div className="mt-2">
                  <Input
                    id="unit"
                    name="unit"
                    type="text"
                    placeholder="Product unit"
                    value={product?.unit}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Type
                </label>
                <div className="mt-2">
                  <select
                    id="type"
                    name="type"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {productType.map(type => {
                      return (<option key={type} selected={type === product?.type}>{type}</option>)
                    })}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="tax" className="block text-sm font-medium leading-6 text-gray-900">
                Product tax
                </label>
                <div className="mt-2">
                  <Input
                    id="tax"
                    name="tax"
                    type="text"
                    placeholder="Product tax"
                    value={product?.tax}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="col-span-6">
                <label htmlFor="locations" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Locations
                </label>
                <div className="mt-2">
                  <Input
                    id="locations"
                    name="locations"
                    type="text"
                    placeholder="Product Locations"
                    value={product?.locations}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button type="button" className="bg-red-400 hover:bg-red-600" onClick={handleCancel}>Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </section>
  )
}

export default ProductDetails