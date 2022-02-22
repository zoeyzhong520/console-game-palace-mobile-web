import './articleDetail.scss'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import { useDangerouslySetInnerHTML } from '../../../common/common'
import * as actionTypes from '../../../store/actionTypes'

const ArticleDetail = (props) => {
    const back = () => {
        // props.dispatch({
        //     type: actionTypes.ADD_TABBARSHOWFLAG,
        //     tabBarShowFlag: true
        // })
        window.history.back(-1)
    }

    return (
        <div className='article-detail-page'>
            <div className="article-detail-page-navBar">
                <NavBar onBack={() => back()}>文章详情</NavBar>
            </div>
            <div className="article-detail-page-title">
                <p>文章标题文章标题文章标题文章标题</p>
                {useDangerouslySetInnerHTML('<p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>')}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tabBarShowFlag: state.tabBarShowFlag
    }
}

export default connect(mapStateToProps)(ArticleDetail)