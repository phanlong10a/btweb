import React, {useEffect, useState} from 'react';
import InputAdd from '../../components/AddBox'
import ListWork from '../../components/ListWork'
import Filter from '../../components/Filter'
import {Row, Col} from 'antd'


const AppTodo = () => {
    localStorage.setItem('myCat', 'Tom');
    return (     
            <Row>
                <Col span={24}>
                    <InputAdd/>
                    <Filter />
                    <ListWork
                    />
                </Col>
            </Row>
    )
}
export default AppTodo