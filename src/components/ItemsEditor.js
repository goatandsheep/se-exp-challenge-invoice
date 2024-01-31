import DropDown from "./DropDown"

export default function ItemsEditor({customer}) {
    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO: what to do?
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* TODO: error handling */}
            <input name="id" value={customer.id} type="number"/>
            <input name="name" value={customer.name}/>
            <input name="email" value={customer.email}/>
            <DropDown name="channel" value={customer.channel}></DropDown>
            <input name="website" value={customer.website}/>
            <input name="address" value={customer.address}/>
            <input name="postal" value={customer.postal}/>
            <input name="city" value={customer.city}/>
            <input name="province" value={customer.province}/>
            <input name="country" value={customer.country}/>
        </form>
        )
}
