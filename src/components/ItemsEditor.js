import { useEffect, useState } from "react"
import DropDown from "./DropDown"

export default function ItemsEditor({ customer, toggleState }) {
    const [draftCustomer, setDraftCustomer] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(draftCustomer)
        toggleState(false)
    }

    function setDraftFieldValue(fieldName, fieldValue) {
        let tempCustomer = { ...draftCustomer }
        tempCustomer[fieldName] = fieldValue
        setDraftCustomer(tempCustomer)
    }

    useEffect(() => setDraftCustomer({ ...customer }), [customer])
    return (
        <form onSubmit={handleSubmit}>
            {/* TODO: duplicate error handling */}
            <button type="submit">Save</button>
            <button onClick={() => toggleState(false)}>Cancel</button>
            <div>
                <label>id</label>
                <input name="id" value={draftCustomer.id} min="0" type="number" pattern="\d" onChange={(e) => setDraftFieldValue('id', e.target.value)} />
            </div>

            <div>
                <label>name</label><input name="name" value={draftCustomer.name} required onChange={(e) => setDraftFieldValue('name', e.target.value)} />
            </div>

            <div>
                <label>email</label><input name="email" value={draftCustomer.email} required onChange={(e) => setDraftFieldValue('email', e.target.value)} />
            </div>
            <DropDown name="channel" value={draftCustomer.channel} onChange={setDraftFieldValue}></DropDown>

            <div>
                <label>website</label><input name="website" value={draftCustomer.website} required onChange={(e) => setDraftFieldValue('website', e.target.value)} />
            </div>

            <div>
                <label>address</label><input name="address" value={draftCustomer.address} required onChange={(e) => setDraftFieldValue('address', e.target.value)} />
            </div>

            <div>
                <label>postal</label><input name="postal" value={draftCustomer.postal} required minLength={6} maxLength={7} onChange={(e) => setDraftFieldValue('postal', e.target.value)} />
            </div>

            <div>
                <label>city</label><input name="city" value={draftCustomer.city} required onChange={(e) => setDraftFieldValue('city', e.target.value)} />
            </div>

            <div>
                <label>province</label><input name="province" value={draftCustomer.province} required minLength={2} maxLength={2} onChange={(e) => setDraftFieldValue('province', e.target.value)} />
            </div>

            <div>
                <label>country</label><input name="country" value={draftCustomer.country} required minLength={2} maxLength={2} onChange={(e) => setDraftFieldValue('country', e.target.value)} />
            </div>
        </form>
    )
}
