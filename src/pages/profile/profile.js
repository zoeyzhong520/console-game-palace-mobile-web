import './profile.scss'
import { Grid, List } from 'antd-mobile'
import { UnorderedListOutline, PayCircleOutline, SetOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigator = useNavigate()

    // 点击Grid的Item
    const gridClick = (e) => {
        navigator('/profileRank')
    }

    // ProfileGrid
    const ProfileGrid = () => {
        return (
            <Grid columns={2} gap={10}>
                <Grid.Item onClick={() => gridClick(1)}>
                    <div className="profile-page-grid-item">角色扮演</div>
                </Grid.Item>
                <Grid.Item onClick={() => gridClick(2)}>
                    <div className="profile-page-grid-item">角色扮演</div>
                </Grid.Item>
                <Grid.Item onClick={() => gridClick(3)}>
                    <div className="profile-page-grid-item">角色扮演</div>
                </Grid.Item>
                <Grid.Item onClick={() => gridClick(4)}>
                    <div className="profile-page-grid-item">角色扮演</div>
                </Grid.Item>
                <Grid.Item onClick={() => gridClick(5)}>
                    <div className="profile-page-grid-item">角色扮演</div>
                </Grid.Item>
                <Grid.Item onClick={() => gridClick(6)}>
                    <div className="profile-page-grid-item">角色扮演</div>
                </Grid.Item>
                <Grid.Item onClick={() => gridClick(7)}>
                    <div className="profile-page-grid-item">角色扮演</div>
                </Grid.Item>
                <Grid.Item onClick={() => gridClick(8)}>
                    <div className="profile-page-grid-item">角色扮演</div>
                </Grid.Item>
                <Grid.Item onClick={() => gridClick(9)}>
                    <div className="profile-page-grid-item">角色扮演</div>
                </Grid.Item>
                <Grid.Item onClick={() => gridClick(10)}>
                    <div className="profile-page-grid-item">角色扮演</div>
                </Grid.Item>
            </Grid>
        )
    }

    // ProfileList
    const ProfileList = () => {
        return (
            <List header=''>
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