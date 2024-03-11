import styles from './Filter.module.scss'
import {useState} from "react";
import MySelect from "../UI/MySelect/index.jsx";
import MyInput from "../UI/MyInput/index.jsx";
import {useDispatch} from "react-redux";
import {actions} from "../../store/reducers/filterReducer/FilterSlice.js";

const Index = () => {

    const [isOpen, setIsOpen] = useState(false)
    if (isOpen) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "unset"
    }

    const dispatch = useDispatch()

    function reset() {
        dispatch(actions.resetSearch())
        setIsOpen(false)
    }


    return (
        isOpen ?
            <div className={styles.open__root} onClick={() => setIsOpen(false)}>
                <div className={styles.open__wrapper} onClick={(e) => e.stopPropagation()}>
                    <h2 className={styles.title}>Сортировка по...</h2>
                    <div className={styles.content}>
                        <MySelect setIsOpen={setIsOpen}/>
                        <MyInput title={'Названию'} setIsOpen={setIsOpen} type={'product'}/>
                        <MyInput title={'Цене'} setIsOpen={setIsOpen} type={'price'}/>
                    </div>
                    <h3 className={styles.reset} onClick={() => reset()}>Сбросить фильтры</h3>
                </div>
            </div>
            :
            <div className={styles.root} onClick={() => setIsOpen(true)}>
                Сортировка по:
            </div>
    )
        ;
};

export default Index;