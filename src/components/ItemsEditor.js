import { useEffect } from "react"
import DropDown from "./DropDown"

export default function ItemsEditor({customer}) {
    const [error, setError] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        // TODO: if error check
        // TODO: console.log(new value)
        // TODO: go back to view mode
    }

    useEffect(() => {
        //
    },[customer])
    return (
        <form onSubmit={handleSubmit}>
            {/* TODO: error handling */}
            <input name="id" value={customer.id} min="1" type="number" pattern="\d"/>
            <input name="name" value={customer.name} minLength="1"/>
            <input name="email" value={customer.email} minLength="1"/>
            <DropDown name="channel" value={customer.channel}></DropDown>
            <input name="website" value={customer.website} minLength="1"/>
            <input name="address" value={customer.address} minLength="1"/>
            <input name="postal" value={customer.postal} minLength="1"/>
            <input name="city" value={customer.city} minLength="1"/>
            <input name="province" value={customer.province} minLength="1"/>
            <input name="country" value={customer.country} minLength="1"/>
        </form>
        )
}
