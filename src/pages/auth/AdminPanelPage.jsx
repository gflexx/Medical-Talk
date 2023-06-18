import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdminSideBar from '../../components/nav/AdminSideBar'
import UsersTab from '../../components/admin/UsersTab'

function AdminPanelPage(props) {
    const [activeTab, setActiveTab] = useState(0)
    useEffect(() => {}, [activeTab])
    function changeTab(id){
        setActiveTab(id)
    }
    return (
        <div>
            <Stack
                direction={'row'}
                spacing={{xs : 0, sm: 0, md: 3}}
                marginTop={1.8} 
                justifyContent={'space-between'}
            >
                <AdminSideBar 
                    activeTab={activeTab}
                    changeTab={changeTab}
                />
                <UsersTab
                    activeTab={activeTab}
                    changeTab={changeTab}
                />  
                
            </Stack>
        </div>
    )
}

export default AdminPanelPage