import React, { useEffect, useState } from 'react'

import { Select, Row, Col } from 'antd';

const { Option } = Select;


function Filter() {
    const [status, setStatus] = useState()
    const onChangeStatus = (value) => {
        localStorage.setItem('statusFilter', value);
    }
    useEffect(()=>{
        const statuslocal = localStorage.getItem('statusFilter');
        setStatus(statuslocal);
        console.log(status)
    },[])
    return status?(
        <Row>
        <Col span={12} offset={6}>
        <Select defaultValue={status} style={{ width: 120 }} onChange={(value)=> onChangeStatus(value)}>
        <Option value="all">Tất cả</Option>   
        <Option value="done">Đã xong</Option>
        <Option value="not done">Chưa xong</Option>
    </Select>
        </Col>
    </Row>
    ):(<>
    </>)
}

export default Filter
