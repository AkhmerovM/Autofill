import React from 'react';
import {Autofill} from "./autofill";

function App () {
    return (
        <div>
            {/*<div className='form-group'>*/}
                {/*<Autofill />*/}
            {/*</div>*/}
            <div className='form-group'>
                <Autofill value='' options={[]} dataSetUrl='http://localhost:3002/dataset' />
            </div>
        </div>
    )
}
export {App}