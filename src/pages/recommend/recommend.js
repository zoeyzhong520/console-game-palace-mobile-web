import './recommend.scss'
import { useEffect, useState } from 'react'
import { tabs } from './recommendService'
import { SearchBar, Tabs, Swiper, List, Image, Toast, Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { cgp_recommend_banner_list, leaderboards_query_list } from '../../common/common'
import * as actionTypes from '../../store/actionTypes'

const Recommend = (props) => {
    const navigator = useNavigate()

    var page = 0 // 分页

    const [recListType, setRecListType] = useState('ALL')
    useEffect(() => {
        let _recListType = 'ALL'
        if (props.recListType.length > 0) {
            _recListType = props.recListType // redux有管理的状态，就取出来 
        }
        getRecList(_recListType)
    }, [])

    const [recList, setRecList] = useState([])

    const [banner, setBanner] = useState([''])
    useEffect(() => {
        // Http请求
        getBanner()
    }, [])

    // RecommendTabs
    const RecommendTabs = () => {
        // 点击Tab
        const tabClick = (e) => {
            // Http请求
            getRecList(e)
        }

        return (
            <Tabs
                activeKey={recListType}
                activeLineMode='fixed'
                style={{
                    '--fixed-active-line-width': '20px',
                }}
                onChange={(e) => tabClick(e)}>
                <Tabs.Tab title='游戏推荐' key='ALL' />
                <Tabs.Tab title='动作游戏' key='A' />
                <Tabs.Tab title='射击游戏' key='B' />
                <Tabs.Tab title='角色扮演' key='C' />
                <Tabs.Tab title='动作冒险' key='D' />
                <Tabs.Tab title='冒险解谜' key='E' />
                <Tabs.Tab title='格斗游戏' key='F' />
                <Tabs.Tab title='赛车游戏' key='G' />
                <Tabs.Tab title='模拟经营' key='H' />
                <Tabs.Tab title='即时战略' key='I' />
                <Tabs.Tab title='文字游戏' key='J' />
                <Tabs.Tab title='恐怖冒险' key='K' />
                <Tabs.Tab title='休闲益智' key='L' />
                <Tabs.Tab title='音乐游戏' key='M' />
                <Tabs.Tab title='策略游戏' key='N' />
                <Tabs.Tab title='生存冒险' key='O' />
                <Tabs.Tab title='卡通可爱' key='P' />
                <Tabs.Tab title='体育竞技' key='Q' />
                <Tabs.Tab title='街机游戏' key='R' />
            </Tabs>
        )
    }

    // RecommendSwiper
    const RecommendSwiper = () => {
        // 点击Swiper的Item
        const swiperItemClick = () => {
            // props.dispatch({
            //     type: actionTypes.ADD_TABBARSHOWFLAG,
            //     tabBarShowFlag: false
            // })
            navigator('/recommendDetail')
        }

        const items = banner.map((item, index) => (
            <Swiper.Item
                onClick={() => swiperItemClick()}
                key={index}>
                <div
                    className='recommend-page-swiper-content'
                    onClick={() => {
                        Toast.show(`你点击了卡片 ${index + 1}`)
                    }}
                >
                    <Image src={item.image} lazy />
                </div>
            </Swiper.Item>
        ))

        return (
            <Swiper autoplay loop>{items}</Swiper>
        )
    }

    // RecommendList
    const RecommendList = () => {
        return (
            <List>
                {recList.map((item, index) => (
                    <List.Item
                        onClick={() => navigator('/recommendDetail')}
                        key={item.objectId}
                        arrow={false}
                        prefix={
                            <Image className='recommend-page-list-prefix' src={item.image} width={100} height={140} fit='contain' lazy />
                        }
                        title={
                            <p className='recommend-page-list-title'>{item.title}</p>
                        }
                        children={
                            <p className='recommend-page-list-children'>{item.description}</p>
                        }
                        description={
                            <p className='recommend-page-list-desc'>阅读全文</p>
                        }
                    >
                    </List.Item>
                ))}
            </List>
        )
    }

    const toSearch = () => {
        props.dispatch({
            type: actionTypes.ADD_TABBARSHOWFLAG,
            tabBarShowFlag: false
        })
        navigator('/recommendSearch')
    }

    // Http请求
    const getBanner = () => {
        if (props.banner.length > 0) {
            setBanner(props.banner)
            return
        }
        Toast.show({
            icon: 'loading',
            content: '加载中...'
        })
        cgp_recommend_banner_list().then(list => {
            Toast.clear()
            setBanner(list)
            props.dispatch({
                type: actionTypes.ADD_BANNER,
                banner: list
            })
        })
    }

    const getRecList = (recListType) => {
        Toast.show({
            icon: 'loading',
            content: '加载中...'
        })
        leaderboards_query_list(recListType, page).then(list => {
            Toast.clear()
            setRecList(list)
            setRecListType(recListType)
            props.dispatch({
                type: actionTypes.ADD_RECLISTTYPE,
                recListType: recListType
            })
        })
    }

    return (
        <div className='recommend-page'>
            <div className="recommend-page-search">
                <SearchBar
                    onFocus={() => toSearch()}
                    placeholder='请输入内容'
                    showCancelButton={() => true} />
            </div>
            <div className='recommend-page-tabs'>
                {<RecommendTabs />}
            </div>
            <div className="recommend-page-swiper">
                {<RecommendSwiper />}
            </div>
            <div className="recommend-page-list">
                {<RecommendList />}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tabBarShowFlag: state.tabBarShowFlag,
        banner: state.banner,
        recListType: state.recListType
    }
}

export default connect(mapStateToProps)(Recommend)