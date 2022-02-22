import './recommendSearch.scss'
import { SearchBar, NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actionTypes'

const RecommendSearch = (props) => {
    const navigate = useNavigate()

    const back = () => {
        props.dispatch({
            type: actionTypes.ADD_TABBARSHOWFLAG,
            tabBarShowFlag: true
        })
        window.history.back(-1)
    }

    return (
        <div className='recommendSearch-page'>
            <div className="recommend-search-page-navBar">
                <NavBar onBack={() => back()}>搜索</NavBar>
            </div>
            <div className="recommendSearch-page-searchBar">
                <SearchBar placeholder='请输入内容' showCancelButton={() => true} />
            </div>
            <div className="recommendSearch-page-list">

            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tabBarShowFlag: state.tabBarShowFlag
    }
}

export default connect(mapStateToProps)(RecommendSearch)