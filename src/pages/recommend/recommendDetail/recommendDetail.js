import './recommendDetail.scss'
import { NavBar, NoticeBar, Image, Toast, Space } from 'antd-mobile'
import { connect } from 'react-redux'
import { useDangerouslySetInnerHTML, cgp_recommend_getDetail_with_objectId } from '../../../common/common'
import * as actionTypes from '../../../store/actionTypes'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const RecommendDetail = (props) => {
    let location = useLocation()
    let params = location.state

    const [gameInfo, setGameInfo] = useState({})
    useEffect(() => {
        // Http请求
        getGameInfo(params.datas, params.isBanner)
    }, [])

    // 分组的组头
    const Section = (props) => {
        return (
            <div className="recommend-detail-page-section">
                <div className="recommend-detail-page-section-l"></div>
                <span>{props.sectionTitle}</span>
            </div>
        )
    }

    const back = () => {
        // props.dispatch({
        //     type: actionTypes.ADD_TABBARSHOWFLAG,
        //     tabBarShowFlag: true
        // })
        window.history.back(-1)
    }

    // Http请求
    const getGameInfo = (gameId, isBanner) => {
        Toast.show({
            icon: 'loading',
            content: '加载中...'
        })
        cgp_recommend_getDetail_with_objectId(gameId, !isBanner ? 'CGP_HotRecommend' : 'CGP_Banner').then(info => {
            Toast.clear()
            setGameInfo(info)
        })
    }

    return (
        <div className='recommend-detail-page'>
            <div className="recommend-detail-page-navBar">
                <NavBar onBack={() => back()}>游戏详情</NavBar>
            </div>
            <div className="recommend-detail-page-noticeBar">
                <NoticeBar content={'如遇网盘链接失效问题 请加微：zhongzhaojunJoe 微信号在页面底部点击可复制 备注：单机小助网盘失效'} color='alert' />
            </div>
            <div className="recommend-detail-page-title">
                <p>{gameInfo.title}</p>
            </div>
            <div className="recommend-detail-page-gameDesc">
                <Section sectionTitle='游戏简介' />
                <p>{gameInfo.description}</p>
            </div>
            <div className="recommend-detail-page-gamePic">
                <Section sectionTitle='游戏截图' />
                <Space />
                {gameInfo.imageList && gameInfo.imageList.map((item, index) => {
                    return <Image src={item} key={index} />
                })}
                <Space />
            </div>
            <div className="recommend-detail-page-gameRequire">
                <Section sectionTitle='系统需求' />
                <p>{gameInfo.requirements}</p>
            </div>
            <div className="recommend-detail-page-gameSrc">
                <Section sectionTitle='资源地址' />
                <p>百度云：<a href={gameInfo.baiduUrl}>{gameInfo.baiduUrl}</a></p>
                <p>天翼云：<a href={gameInfo.tyUrl}>{gameInfo.tyUrl}</a></p>
                {useDangerouslySetInnerHTML(gameInfo.resources)}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tabBarShowFlag: state.tabBarShowFlag
    }
}

export default connect(mapStateToProps)(RecommendDetail)