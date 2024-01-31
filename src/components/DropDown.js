/**
 * Input field for customer form
 */
export default function DropDown({ value, name }) {
    return (
        <select name={name} value={value}>
            <option value="website">Website</option>
            <option value="email">Email</option>
            <option value="phone">phone</option>
            <option value="word-of-mouth">Word of Mouth</option>
            <option value="other">Other</option>
        </select>
    )
}
