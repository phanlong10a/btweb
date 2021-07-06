import React from 'react';
import './Header.css'
import { PageHeader, Button, Descriptions } from 'antd';

const HeaderTodos = () => {
    return (
        <>
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                ghost={false}
                title="Todo List App Pro"
                extra={[
                    <Button key="1" type="primary">
                        Đăng xuất
                    </Button>
                ]}
                >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Xin Chào">Nong</Descriptions.Item>
                    <Descriptions.Item label="Công việc đã tạo">
                    421421
                    </Descriptions.Item>
                    <Descriptions.Item label="Công việc chưa hoàn thành">421421</Descriptions.Item>
                    <Descriptions.Item label="Công việc đã hoàn thành">421421</Descriptions.Item>
                </Descriptions>
                </PageHeader>
            </div>
        </>
    );
};

export default HeaderTodos
;
