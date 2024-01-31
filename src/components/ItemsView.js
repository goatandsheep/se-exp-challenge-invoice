import ItemDetail from "./ItemDetail"

/**
 *
 * @property {import('./CustomerDetails.js').CustomerDetails} customer
 * @returns
 */
export default function ItemsView({customer}) {
    return (
        <div>
            <ItemDetail name="id" value={customer.id}></ItemDetail>
            <ItemDetail name="name" value={customer.name}></ItemDetail>
            <ItemDetail name="email" value={customer.email}></ItemDetail>
            <ItemDetail name="channel" value={customer.channel}></ItemDetail>
            <ItemDetail name="website" value={customer.website}></ItemDetail>
            <ItemDetail name="address" value={customer.address}></ItemDetail>
            <ItemDetail name="postal" value={customer.postal}></ItemDetail>
            <ItemDetail name="city" value={customer.city}></ItemDetail>
            <ItemDetail name="province" value={customer.province}></ItemDetail>
            <ItemDetail name="country" value={customer.country}></ItemDetail>
        </div>
        )
}
