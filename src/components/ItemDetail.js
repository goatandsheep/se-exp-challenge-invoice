import styles from "@/styles/Home.module.css";

/**
 * TODO: generate the for ID
 * @property {String} name
 * @property {String} value
 * @returns
 */
export default function ItemDetail({name, value}) {
    return (
        <div className={styles.card}>
            <label for="">{name}</label>
            <p>{value}</p>
        </div>
        )
}
