import styles from "./Header.module.scss"
const Index = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <h2>products</h2>
                <h2>{Date().toString().slice(0, 10).replace("-", '').toLowerCase()}</h2>
            </div>
        </header>
    );
};

export default Index;