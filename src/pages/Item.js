import React from 'react';
import CategorySmall from '../components/CategorySmall';
import Navbar from '../components/navbar';
import DetailMain from '../components/DetailMain'

const Item = () => {
    return(
        <div>
            <Navbar />
            <CategorySmall />
            <DetailMain />
        </div>

    )
}

export default Item;