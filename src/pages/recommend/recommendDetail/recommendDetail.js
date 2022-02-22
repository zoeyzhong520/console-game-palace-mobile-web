import './recommendDetail.scss'
import { NavBar, NoticeBar, Image } from 'antd-mobile'
import { connect } from 'react-redux'
import { useDangerouslySetInnerHTML } from '../../../common/common'
import * as actionTypes from '../../../store/actionTypes'

const RecommendDetail = (props) => {

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

    const demoSrc =
        'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'

    return (
        <div className='recommend-detail-page'>
            <div className="recommend-detail-page-navBar">
                <NavBar onBack={() => back()}>游戏详情</NavBar>
            </div>
            <div className="recommend-detail-page-noticeBar">
                <NoticeBar content={'dasdasdaskl dasdsadjaskdjkals dasdasdaskmcmx dasdfewfsd qwqwqwqwqqwq mkdsnfkjsdnf'} color='alert' />
            </div>
            <div className="recommend-detail-page-title">
                <p>游戏标题游戏标题游戏标题游戏标题游戏标题游戏标题游戏标题游戏标题游戏标题</p>
            </div>
            <div className="recommend-detail-page-gameDesc">
                <Section sectionTitle='游戏简介' />
                <p>游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介游戏简介</p>
            </div>
            <div className="recommend-detail-page-gamePic">
                <Section sectionTitle='游戏截图' />
                <Image src={demoSrc} />
            </div>
            <div className="recommend-detail-page-gameRequire">
                <Section sectionTitle='系统需求' />
                <p>系统需求系统需求系统需求系统需求系统需求系统需求系统需求系统需求系统需求</p>
            </div>
            <div className="recommend-detail-page-gameSrc">
                <Section sectionTitle='资源地址' />
                {useDangerouslySetInnerHTML('<p>解压码/激活码：799979 </p><br /><p>百度网盘 提取码：mumc </p>')}
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