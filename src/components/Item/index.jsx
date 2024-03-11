import styles from './Item.module.scss'
const Index = ({product, id, brand, price}) => {
    return (
        <div className={styles.root}>
            <div className={styles.heading}>
                <h1>{id}</h1>
                <h5>{brand}</h5>
            </div>
            <h3>{product}</h3>
            <h4>{price}</h4>
        </div>
    );
};

export default Index;