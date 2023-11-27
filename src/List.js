
import React  from 'react'
/* import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa"; */
import ItemList from './ItemList';


const List = ({items,handleCheck,handleDelete}) => {
    
    
    return (
        <main>
             {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default List
