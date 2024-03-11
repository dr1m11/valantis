import styles from './MySelect.module.scss'
import {fetchFilter} from "../../../store/reducers/filterReducer/ActionCreators.js";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFields} from "../../../store/reducers/fieldsReducer/ActionCreators.js";
const Index = ({setIsOpen}) => {

    const {brands, errorField} = useSelector(state => state.fieldsReducer)
    const {errorFilter, toggleFilter} = useSelector(state => state.filterReducer)

    useEffect(() => {
        dispatch(fetchFields())
    }, [errorField]);

    const [brandSelect, setBrandSelect] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (errorFilter) {
            dispatch(fetchFilter({'brand': brandSelect}))
        }
    }, [toggleFilter]);

    function setFilter(e) {
        dispatch(fetchFilter({'brand': brandSelect}))
        e.preventDefault()
        setIsOpen(false)
    }

    return (
        <form className={styles.form}>
            <label className={styles.label}>
                Бренду:
                <select className={styles.select} value={brandSelect} onChange={(e) => setBrandSelect(e.target.value)}>
                    <option disabled value={''}></option>
                    {
                        brands.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))
                    }
                </select>
            </label>
            <input className={styles.submit} type={"submit"} value={'Применить'} onClick={(e) => setFilter(e)}/>
        </form>
    );
};

export default Index;