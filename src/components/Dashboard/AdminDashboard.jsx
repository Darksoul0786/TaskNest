import React from 'react'

import AllTask from '../others/AllTask'
//import AllTask from '../others/AllTask'
import CreateTask from '../others/CreateTask'
import Header from '../others/Header'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard