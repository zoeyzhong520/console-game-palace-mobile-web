import './recommend.scss'
import { useEffect, useState } from 'react'
import { tabs } from './recommendService'
import { SearchBar, Tabs, Swiper, List, Image, Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actionTypes'

const Recommend = (props) => {
    const navigator = useNavigate()

    // RecommendTabs
    const RecommendTabs = () => {
        return (
            <Tabs
                activeLineMode='fixed'
                style={{
                    '--fixed-active-line-width': '20px',
                }}
                onChange={(e) => Toast.show(`你点击了 ${e}`)}>
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
    const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
    const RecommendSwiper = () => {
        // 点击Swiper的Item
        const swiperItemClick = () => {
            // props.dispatch({
            //     type: actionTypes.ADD_TABBARSHOWFLAG,
            //     tabBarShowFlag: false
            // })
            navigator('/recommendDetail')
        }

        const items = colors.map((color, index) => (
            <Swiper.Item
                onClick={() => swiperItemClick()}
                key={index}>
                <div
                    className='recommend-page-swiper-content'
                    style={{ background: color }}
                    onClick={() => {
                        Toast.show(`你点击了卡片 ${index + 1}`)
                    }}
                >
                    {index + 1}
                </div>
            </Swiper.Item>
        ))

        return (
            <Swiper autoplay loop>{items}</Swiper>
        )
    }

    // RecommendList
    const users = [
        {
            avatar:
                'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Novalee Spicer',
            description: 'Deserunt dolor ea eaque eos',
            id: 'dsdsa'
        },
        {
            avatar:
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
            name: 'Sara Koivisto',
            description: 'Animi eius expedita, explicabo',
            id: 'sadsad'
        },
        {
            avatar:
                'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Marco Gregg',
            description: 'Ab animi cumque eveniet ex harum nam odio omnis',
            id: 'dasasf'
        },
        {
            avatar:
                'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Edith Koenig',
            description: 'Commodi earum exercitationem id numquam vitae',
            id: 'ewrwe'
        },
        {
            avatar:
                'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Novalee Spicer',
            description: 'Deserunt dolor ea eaque eos',
            id: 'xcdsc'
        },
        {
            avatar:
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
            name: 'Sara Koivisto',
            description: 'Animi eius expedita, explicabo',
            id: 'hghgf'
        },
        {
            avatar:
                'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Marco Gregg',
            description: 'Ab animi cumque eveniet ex harum nam odio omnis',
            id: 'iuijk'
        },
        {
            avatar:
                'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Edith Koenig',
            description: 'Commodi earum exercitationem id numquam vitae',
            id: 'pkolkmlk'
        },
        {
            avatar:
                'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Novalee Spicer',
            description: 'Deserunt dolor ea eaque eos',
            id: 'ererwq'
        },
        {
            avatar:
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
            name: 'Sara Koivisto',
            description: 'Animi eius expedita, explicabo',
            id: 'qwqw'
        },
        {
            avatar:
                'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Marco Gregg',
            description: 'Ab animi cumque eveniet ex harum nam odio omnis',
            id: 'csdvsfdvs'
        },
        {
            avatar:
                'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            name: 'Edith Koenig',
            description: 'Commodi earum exercitationem id numquam vitae',
            id: 'sadasd'
        },
    ]
    const RecommendList = () => {
        return (
            <List header=''>
                {users.map(user => (
                    <List.Item
                        onClick={() => navigator('/recommendDetail')}
                        key={user.id}
                        prefix={
                            <Image
                                src={user.avatar}
                                style={{ borderRadius: 20 }}
                                fit='cover'
                                width={40}
                                height={40}
                            />
                        }
                        description={user.description}
                    >
                        {user.name}
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
        tabBarShowFlag: state.tabBarShowFlag
    }
}

export default connect(mapStateToProps)(Recommend)