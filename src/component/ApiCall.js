import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../redux'

function ApiCall(props) {
    

    return (
        <div>
            <h1>Data</h1>
            <button onClick={props.fetchUsers}>call</button>
            {
                props.userData.loading ? 
                    <h1>Loading</h1> :
                    props.userData.error ? 
                        <div>{props.userData.error}</div>:
                        props.userData.data.map(res=><div>{res.name}</div>)                    
            }
        </div>
    )
}

const mapStateToProps=state=>{
    return {
        userData:state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers:()=>dispatch(fetchData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ApiCall)
