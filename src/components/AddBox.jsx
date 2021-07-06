import React from 'react'
import { Input, Row, Col } from 'antd';
import {addTask} from '../services/api'

const { Search } = Input;

function AddBox() {
    const add = (value) => {
        addTask(value)
    }

    return (
        <>
        <Row style={{margin: '30px 0px'}}>
            <Col span={12} offset={6}>
            <Search
                placeholder="nhập công việc"
                allowClear
                enterButton="Thêm"
                size="large"
                onSearch={value => add(value)}
            />
            </Col>
        </Row>
        </>
    )
}

export default AddBox
