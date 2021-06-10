import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';



 const Welcome=()=>{

const history=useHistory();

const viewData=()=>{
    history.push('/dashboard');
}


    return(
        <>
        <h2>You have Been successfully register </h2>
        <Button onClick={viewData}
        color="primary"
        variant="contained"
        >View Data</Button>
        </>
    )
}
export default Welcome