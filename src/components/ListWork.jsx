import React,{useState, useEffect} from 'react'
import {Row, Col, List, Checkbox} from 'antd'
import {
    DeleteOutlined
  } from '@ant-design/icons';
import {modifyTask, getList} from '../services/api'
function ListWork(props) {
    const [listWork, setListWork] = useState([])
    useEffect(() => {
        getList().then(result => {setListWork(result.data)})
    },[])
    const styleFinish = {
        textDecoration: 'line-through',
        color: 'red'
    }
    const removeTask = (id) => {

    }
    const finish = async (item) => {
        const finishItem = {...item, isDone: !item.isDone}
        await modifyTask(finishItem, item.id);
        await getList().then(result => {setListWork(result.data)})
    }

    return (
        <>
        <Row style ={{margin: '20px 0px'}}>
         <Col span={12} offset={6}>
         <List
            itemLayout="horizontal"
            bordered
            dataSource={listWork}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                style={item.isDone ? styleFinish : null}
                avatar={<Checkbox
                            onChange={() => {finish(item)}}
                />}
                title={item.task}
                />
                <button
                onClick={()=> removeTask(item.id)}
                ><DeleteOutlined />
                </button>
            </List.Item>
            )}
        />
         </Col>
        </Row>
        </>
    )
}

export default React.memo(ListWork)
