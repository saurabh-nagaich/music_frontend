import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCream(props) {

    const [number,setNumber]=useState(1)

    return (
        <div>
            <h1>ice cream</h1>
            <div>{props.numberOfIceCreame}</div>
            <div>{number}</div>
            <input type="number" onChange={e=>setNumber(e.target.value)} />
            <button onClick={()=>props.buyIceCream(number?number:1)}>buy iceCream</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        numberOfIceCreame: state.iceCreame.numOfIceCream
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyIceCream:(number)=>dispatch(buyIceCream(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCream)
