import './profile.scss'
import { Grid, List, Space, Tag } from 'antd-mobile'
import { UnorderedListOutline, PayCircleOutline, SetOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()

    // 点击Grid的Item
    const gridClick = (e, item) => {
        navigate('/profileRank', { state: { datas: item } })
    }

    // ProfileGrid
    const ProfileGrid = () => {
        const tabsList = [
            {
                name: "角色扮演",
                type: 'C'
            },
            {
                name: "即时战略",
                type: 'I'
            },
            {
                name: "体育竞技",
                type: 'Q'
            },
            {
                name: "模拟经营",
                type: 'H'
            },
            {
                name: "休闲益智",
                type: 'L'
            },
            {
                name: "射击游戏",
                type: 'B'
            },
            {
                name: "动作游戏",
                type: 'A'
            },
            {
                name: "策略战棋",
                type: 'N'
            },
            {
                name: "赛车竞技",
                type: 'G'
            },
            {
                name: "动作冒险",
                type: 'D'
            }]
        return (
            <div>
                {tabsList.map((item, index) => {
                    return <Tag
                        onClick={(e) => gridClick(e, item)}
                        className='profile-page-grid-item'
                        color='#f5f6f7' 
                        key={index}>{item.name}</Tag>
                })}
            </div>
        )
    }

    // ProfileList
    const ProfileList = () => {
        return (
            <List style={{ '--border-top': 0, '--border-bottom': 0 }}>
                <List.Item prefix={<UnorderedListOutline />} onClick={() => navigator('/profileClub')}>
                    加入俱乐部
                </List.Item>
                <List.Item prefix={<PayCircleOutline />} onClick={() => navigator('/profileAbout')}>
                    关于单机小助
                </List.Item>
            </List>
        )
    }

    return (
        <div className='profile-page'>
            <div className="profile-page-grid">
                {<ProfileGrid />}
            </div>
            <div className="profile-page-list">
                {<ProfileList />}
            </div>
        </div>
    )
}

export default Profile