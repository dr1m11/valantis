import styles from './MyButton.module.scss'



const Index = ({children, onClickBtn}) => {
    return (
        <button onClick={onClickBtn} className={styles.root}>
            {children}
        </button>
    );
};

export default Index;