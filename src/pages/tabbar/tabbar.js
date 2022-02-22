import './tabbar.scss'
import { TabBar } from 'antd-mobile'
import { AppOutline, UnorderedListOutline, UserOutline, } from 'antd-mobile-icons'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actionTypes'
import Recommend from '../recommend/recommend'
import RecommendSearch from '../recommend/recommendSearch/recommendSearch'
import RecommendDetail from '../recommend/recommendDetail/recommendDetail'
import Article from '../article/article'
import ArticleDetail from '../article/articleDetail/articleDetail'
import Profile from '../profile/profile'
import ProfileClub from '../profile/profileClub/profileClub'
import ProfileAbout from '../profile/profileAbout/profileAbout';
import ProfileRank from '../profile/profileRank/profileRank'

const CGPTabBar = (props) => {  
    // 标签栏
const Bottom = () => {    
    const navigate = useNavigate()

    const tabs = [
        {
            key: '/',
            title: '游戏推荐',
            icon: <AppOutline />,
        },
        {
            key: '/article',
            title: '热门文章',
            icon: <UnorderedListOutline />,
        },
        {
            key: '/profile',
            title: '戳我',
            icon: <UserOutline />,
        },
    ]

    // 点击TabBar
    const tabBarClick = (e) => {
        // 更新redux
        // props.dispatch({
        //     type: actionTypes.ADD_TABBARSHOWFLAG,
        //     tabBarShowFlag: e === '/' || e === '/article' || e === '/profile'
        // })
        navigate(e)
    }

    return (
        <TabBar
            style={{display: props.tabBarShowFlag ? 'block' : 'none'}}
            onChange={(e) => tabBarClick(e)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
}

    return (
        <Router initialEntries={['/']}>
            <div className='tabbar-app'>
                <div className="tabbar-body">
                    <Routes>
                        <Route exact path='/' element={<Recommend />} />
                        <Route exact path='/article' element={<Article />} />
                        <Route exact path='/profile' element={<Profile />} />
                        <Route exact path='/recommendSearch' element={<RecommendSearch />} />
                        <Route exact path='/recommendDetail' element={<RecommendDetail />} />
                        <Route exact path='/articleDetail' element={<ArticleDetail />} />
                        <Route exact path='/profileClub' element={<ProfileClub />} />
                        <Route exact path='/profileAbout' element={<ProfileAbout />} />
                        <Route exact path='/profileRank' element={<ProfileRank />} />
                    </Routes>
                </div>
                <div className="tabbar-bottom">
                    <Bottom />
                </div>
            </div>
        </Router>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tabBarShowFlag: state.tabBarShowFlag
    }
}

export default connect(mapStateToProps)(CGPTabBar)