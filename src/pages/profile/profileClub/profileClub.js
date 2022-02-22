import './profileClub.scss'
import { NavBar, NoticeBar, Image } from 'antd-mobile'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actionTypes'

const ProfileClub = (props) => {
    const back = () => {
        props.dispatch({
            type: actionTypes.ADD_TABBARSHOWFLAG,
            tabBarShowFlag: true
        })
        window.history.back(-1)
    }

    const demoSrc =
        'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'

    return (
        <div className='profile-club-page'>
            <div className="profile-club-page-navBar">
                <NavBar onBack={() => back()}>文章详情</NavBar>
            </div>
            <div className="profile-club-page-noticeBar">
                <NoticeBar content={'dasdasdaskl dasdsadjaskdjkals dasdasdaskmcmx dasdfewfsd qwqwqwqwqqwq mkdsnfkjsdnf'} color='alert' />
            </div>
            <div className="profile-club-page-qrCode">
                <Image src={demoSrc} />
                <p>说明文本</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tabBarShowFlag: state.tabBarShowFlag
    }
}

export default connect(mapStateToProps)(ProfileClub)