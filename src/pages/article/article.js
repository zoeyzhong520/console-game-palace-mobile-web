import './article.scss'
import { List, Image, Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { cgp_popular_articles_list } from '../../common/common'
import * as actionTypes from '../../store/actionTypes'

const Article = (props) => {
    var page = 1 // 页码

    const [articleList, setArticleList] = useState([])
    useEffect(() => {
        // Http请求
        getArticles()
    }, [])

    // ArticleList
    const ArticleList = () => {
        const navigator = useNavigate()

        // 点击文章
        const articleClick = (e) => {
            // props.dispatch({
            //     type: actionTypes.ADD_TABBARSHOWFLAG,
            //     tabBarShowFlag: false
            // })
            navigator('/articleDetail')
        }

        return (
            <List mode='card'>
                {articleList.map((item, index) => (
                    <List.Item
                        arrow={false}
                        onClick={(e) => articleClick(e)}
                        key={item.objectId}
                        children={
                            <Image src={item.image} width={335} height={190} fit='cover' lazy />
                        }
                        description={
                            <p className='article-page-title'>{item.title}</p>
                        }
                    >
                    </List.Item>
                ))}
            </List>
        )
    }

    // Http请求
    const getArticles = () => {
        Toast.show({
            icon: 'loading',
            content: '加载中...'
        })
        cgp_popular_articles_list(page).then(list => {
            Toast.clear()
            setArticleList(list)
        })
    }

    return (
        <div className='article-page'>
            {<ArticleList />}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tabBarShowFlag: state.tabBarShowFlag
    }
}

export default connect(mapStateToProps)(Article)