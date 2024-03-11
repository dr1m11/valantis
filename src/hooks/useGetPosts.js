import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchId} from "../store/reducers/idReducer/ActionCreators.js";
import {fetchItems} from "../store/reducers/itemsReducer/ActionCreators.js";

export function useGetPosts(offset) {
    const dispatch = useDispatch()
    const {posts, errorPost, isLoadingPost, errorToggle} = useSelector(state => state.itemsReducer)
    const {ids, errorId, isLoadingId, toggleError} = useSelector(state => state.idReducer)
    const {filterIds, searchValueEmpty} = useSelector(state => state.filterReducer)


    useEffect(() => {
        dispatch(fetchId(offset))
        if (errorId) console.log(errorId)
    }, [offset, toggleError]);

    useEffect(() => {
        if (ids.length && searchValueEmpty) {
            dispatch(fetchItems(ids))
            if (errorPost) console.log(errorPost)
        } else if (!searchValueEmpty || filterIds.length){
            dispatch(fetchItems(filterIds))
            if (errorPost) console.log(errorPost)
        }
    }, [ids, errorToggle, filterIds, searchValueEmpty]);

    return [posts, isLoadingPost, isLoadingId]
}