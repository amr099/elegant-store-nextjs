/* eslint-disable react/prop-types */
export default function Order({ item }) {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.date}</td>
            <td>{item.status}</td>
            <td>{item.price}</td>
        </tr>
    );
}
