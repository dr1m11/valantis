import styles from './MyInput.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchFilter} from "../../../store/reducers/filterReducer/ActionCreators.js";
const Index = ({title, setIsOpen, type}) => {

    const {errorFilter, toggleFilter} = useSelector(state => state.filterReducer)

    const [filterValue, setFilterValue] = useState('')


    const dispatch = useDispatch()

    useEffect(() => {
        if (errorFilter && (type === 'price')) {
            dispatch(fetchFilter({"price": +filterValue}))
        } else if (errorFilter && (type === 'product')) {
            dispatch(fetchFilter({"product": filterValue}))
        }
    }, [toggleFilter]);

    function setFilter(e) {
        if (type === 'product') {
            dispatch(fetchFilter({"product": filterValue}))
            e.preventDefault()
            setIsOpen(false)
        } else {
            dispatch(fetchFilter({"price": +filterValue}))
            e.preventDefault()
            setIsOpen(false)
        }
    }

    return (
        <form className={styles.form}>
            <label className={styles.label}>
                {title}:
                <input className={styles.input} type={"text"} placeholder={'Начните ввод'} onChange={e => setFilterValue(e.target.value)}/>
            </label>
            <input className={styles.submit} type={"submit"} value={'Применить'} onClick={(e) => setFilter(e)}/>
        </form>
    );
};

export default Index;