import campfireImg from "../../assets/campfire.jpg";
import Goal from "../../components/Goal/Goal";
import "./Home.scss"

const Home = () => {
    return (
        <div className="home-container">
            <div className="fire-container">
                <img className="campfire-image" src={campfireImg}></img>
            </div>
            <div className="goal-container">
                <Goal/>
            </div>
        </div>
    );
};

export default Home;
