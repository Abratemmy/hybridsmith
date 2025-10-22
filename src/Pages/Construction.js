import React from 'react';
import construction from './../Images/construction.png'

function Construction() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5%' }}>
            <div className='image'>
                <img src={construction} alt=" " width='150%' />
                <h5 style={{ paddingTop: '30px', textTransform: 'uppercase', fontWeight: '600', textAlign: 'center' }}>Work in progress</h5>
            </div>
        </div>
    )
}

export default Construction