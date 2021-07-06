import React from 'react'
import HeaderTodos from './Header'
import FooterTodos from './Footer'
import {Layout} from 'antd';
import styled from 'styled-components'



const SiteLayoutContent = styled.div`
    min-height: 280px;
    padding: 24px;
    background: #fff;
`
const {Content} = Layout;

const MasterLayoutTodos = (props) => {
    return(
        <Layout>
            <HeaderTodos/>
            <Content >
            <SiteLayoutContent>{props.children}</SiteLayoutContent>
            </Content>
            <FooterTodos/>
        </Layout>
    )
}
export default React.memo(MasterLayoutTodos)
