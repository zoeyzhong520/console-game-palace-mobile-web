import './articleDetail.scss'
import { connect } from 'react-redux'
import { NavBar, Toast } from 'antd-mobile'
import { useDangerouslySetInnerHTML, cgp_recommend_getDetail_with_objectId } from '../../../common/common'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import * as actionTypes from '../../../store/actionTypes'

const ArticleDetail = (props) => {
    let location = useLocation()
    let objectId = location.state

    const [articleInfo, setArticleInfo] = useState({})
    useEffect(() => {
        // Http请求
        getArticleInfo(objectId.datas)
    }, [])

    const back = () => {
        // props.dispatch({
        //     type: actionTypes.ADD_TABBARSHOWFLAG,
        //     tabBarShowFlag: true
        // })
        window.history.back(-1)
    }

    // Http请求
    const getArticleInfo = (articleId) => {
        Toast.show({
            icon: 'loading',
            content: '加载中...'
        })
        cgp_recommend_getDetail_with_objectId(articleId, 'CGP_PopularArticles').then(info => {
            Toast.clear()
            setArticleInfo(info)
        })
    }

    return (
        <div className='article-detail-page'>
            <div className="article-detail-page-navBar">
                <NavBar onBack={() => back()}>{articleInfo.title}</NavBar>
            </div>
            <div className="article-detail-page-title">
                {useDangerouslySetInnerHTML(articleInfo.content)}
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