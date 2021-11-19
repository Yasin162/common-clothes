import React from 'react'
import { MyConsumer } from './MyContext';
import ClothingLink from './ClothingLink';

const Clothes = () => {

    return (
        <MyConsumer>
            {context => {
                const clothingList = context.clothes.map(c => <ClothingLink key={c.id} clothing={c} />)
                return(
                        <div>
                            <h1>Clothes</h1>
                            <hr/>
                            {clothingList}
                        </div>

                )}
            }
        </MyConsumer>
    )
}

export default Clothes;
