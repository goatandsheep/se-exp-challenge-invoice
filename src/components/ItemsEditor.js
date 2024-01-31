import { useEffect, useState } from "react"
import DropDown from "./DropDown"

export default function ItemsEditor({customer, toggleState}) {
    const [error, setError] = useState(null)
    const handleSubmit = (event) => {
        event.preventDefault()
        window.alert('hi')
        // TODO: if error check
        // TODO: console.log(new value)
        // TODO: go back to view mode
        toggleState(false)
    }

    useEffect(() => {
        //
    },[customer])
    return (
        <form onSubmit={handleSubmit}>
            {/* TODO: error handling */}
            <button type="submit">Save</button>
            <button onClick={() => toggleState(false)}>Cancel</button>
            <div>
            <label>id</label>
                <input name="id" value={customer.id} min="1" type="number" pattern="\d"/>
            </div>

            <div>
                <label>name</label><input name="name" value={customer.name} minLength="1"/>
            </div>

            <div>
                <label>email</label><input name="email" value={customer.email} minLength="1"/>
            </div>

            <div>
                <label>channel</label><DropDown name="channel" value={customer.channel}></DropDown>
            </div>

            <div>
                <label>website</label><input name="website" value={customer.website} minLength="1"/>
            </div>

            <div>
                <label>address</label><input name="address" value={customer.address} minLength="1"/>
            </div>

            <div>
                <label>postal</label><input name="postal" value={customer.postal} minLength="1"/>
            </div>

            <div>
                <label>city</label><input name="city" value={customer.city} minLength="1"/>
            </div>

            <div>
                <label>province</label><input name="province" value={customer.province} minLength="1"/>
            </div>

            <div>
                <label>country</label><input name="country" value={customer.country} minLength="1"/>
            </div>
        </form>
        )
}
