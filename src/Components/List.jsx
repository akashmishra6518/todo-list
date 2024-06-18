import React from 'react'
export default function List(props) {
    const item=[...props.data];
  return (
    <div>
      <h2>Updated List</h2>
      <ol>
        {
        item.map((itm,index) => (
            <li key={index}>{itm}</li>
        ))}
      </ol>
    </div>
  )
}
