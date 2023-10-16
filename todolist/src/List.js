import React from 'react'
import './List.css'

function List(props){
    const deleteItemFromList = key =>{
     const newList =  props.itemList.filter(itemObj =>{
           return itemObj.key !== key
        })
        props.updateItemList(newList)
    }
  return (
    <div>
        {props.itemList.map(e =>{
        return (
            <div className='items'>
            <p>{e.item}</p>
             <button onClick={() => deleteItemFromList(e.key)}>x</button>
        </div>
        )
        })}
    </div>
  )
}

export default List