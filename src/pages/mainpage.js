import React from 'react'
import MyTable from '../page-component/Table'
import NavHead from '../page-component/Navhead'

const Mainpage = ({tab}) => {
  return (
    <div>
        <MyTable tab = {tab} />
    </div>
  )
}

export default Mainpage