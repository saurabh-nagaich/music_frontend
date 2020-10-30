import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from "./../redux"

function Content(props) {
    return (
        <div>
            <h1>contner</h1>
            <div>{props.numberOfCake}</div>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        numberOfCake: state.cake.numOfCake
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content)
