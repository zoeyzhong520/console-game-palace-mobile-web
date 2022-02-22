import './profileAbout.scss'
import { connect } from 'react-redux'
import { NavBar, Image } from 'antd-mobile'
import * as actionTypes from '../../../store/actionTypes'

const ProfileAbout = (props) => {
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
        <div className='profile-about-page'>
            <div className="profile-about-page-navBar">
                <NavBar onBack={() => back()}>如何加入俱乐部</NavBar>
            </div>
            <div className="profile-about-page-logo">
                <Image src={demoSrc} />
                <p>如果你热爱单机小助</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tabBarShowFlag: state.tabBarShowFlag
    }
}

export default connect(mapStateToProps)(ProfileAbout)