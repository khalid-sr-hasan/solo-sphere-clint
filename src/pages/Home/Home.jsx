import Carousel from "../../components/Carousel";
import TabCategory from "../../components/TabCategory";

const Home = () => {
    return (
        <div>
            <Carousel />
            <div className="py-24">
                <TabCategory />
            </div>
        </div>
    );
};

export default Home;
