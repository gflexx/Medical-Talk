import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdminSideBar from '../../components/nav/AdminSideBar'
import UsersTab from '../../components/admin/UsersTab'
import Doctorstab from '../../components/admin/Doctorstab'
import HospitalsTab from '../../components/admin/HospitalsTab'
import DiseasesTab from '../../components/admin/DiseasesTab'
import BlogsTab from '../../components/admin/BlogsTab'

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
                {activeTab === 0 && (
                    <UsersTab/> 
                )}
                {activeTab === 1 && (
                    <Doctorstab/>
                )}
                {activeTab === 2 && (
                    <HospitalsTab/>
                )}
                {activeTab === 3 && (
                    <DiseasesTab/>
                )}
                {activeTab === 4 && (
                    <BlogsTab/>
                )}
            </Stack>
        </div>
    )
}

export default AdminPanelPage