import styles from './ItemsBlock.module.scss'
import {useState} from "react";
import {skeleton} from "../../constants/skeleton.js";
import ContentLoader from "react-content-loader";
import Item from "../Item/index.jsx";
import MyButton from "../UI/MyButton/index.jsx";
import Filter from "../Filter/index.jsx";
import {useGetPosts} from "../../hooks/useGetPosts.js";


const Index = () => {

    const [offset, setOffset] = useState(0)

    const [posts, isLoadingPost, isLoadingId] = useGetPosts(offset)

    function changeOffset(flag, offset) {
        if (flag && posts.length >= 50) setOffset(offset + 50)
        else if (offset > 0) setOffset(offset - 50)
    }

    return (
        <div className={styles.root}>
            <h3>Products</h3>
            <div>
                <Filter/>
                <div className={styles.items}>
                    {
                        isLoadingPost || isLoadingId ?
                            skeleton.map((_, id) => (
                                <ContentLoader
                                    speed={2}
                                    width={200}
                                    height={300}
                                    viewBox="0 0 200 300"
                                    backgroundColor="#f3f3f3"
                                    foregroundColor="#ecebeb"
                                    key={id}
                                >
                                    <rect x="0" y="12" rx="10" ry="10" width="160" height="20"/>
                                    <rect x="0" y="52" rx="10" ry="10" width="200" height="65"/>
                                    <rect x="0" y="143" rx="10" ry="10" width="60" height="24"/>
                                </ContentLoader>
                            ))
                            :
                            posts.map(({id, price, product, brand}) => (
                                <Item key={id} price={price} product={product} brand={brand} id={id}/>
                            ))
                    }
                </div>
            </div>
            {
                posts.length || (isLoadingPost || isLoadingId) ?
                    <div className={styles.buttons}>
                        <MyButton onClickBtn={() => changeOffset(false, offset)}>{'<'}</MyButton>
                        <MyButton onClickBtn={() => changeOffset(true, offset)}>{'>'}</MyButton>
                    </div>
                    :
                    <h1 className={styles.no__posts} >Постов не найдено :(</h1>
            }
        </div>
    );
};

export default Index;