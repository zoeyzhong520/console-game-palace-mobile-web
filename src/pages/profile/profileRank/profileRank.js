import './profileRank.scss'
import { NavBar, List, Image } from 'antd-mobile'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import * as actionTypes from '../../../store/actionTypes'
import { useEffect, useState } from 'react'

const ProfileRank = (props) => {
    const navigator = useNavigate()
    let location = useLocation()
    let params = location.state

    const [tabItem, setTabItem] = useState({})
    useEffect(() => {
        console.log(JSON.stringify(params.datas));
    }, [])

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
    
    // RankList
    const rankClick = (e) => {
        navigator('/recommendDetail')
    }

    const RankList = () => {
        return (
            <List header=''>
                {users.map(user => (
                    <List.Item
                        onClick={(e) => rankClick(e)}
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

    const back = () => {
        // props.dispatch({
        //     type: actionTypes.ADD_TABBARSHOWFLAG,
        //     tabBarShowFlag: true
        // })
        window.history.back(-1)
    }

    return (
        <div className='profile-rank-page'>
            <div className="profile-rank-page-navBar">
                <NavBar onBack={() => back()}>排行榜</NavBar>
            </div>
            <div className="profile-rank-page-list">
                <RankList />
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tabBarShowFlag: state.tabBarShowFlag
    }
}

export default connect(mapStateToProps)(ProfileRank)