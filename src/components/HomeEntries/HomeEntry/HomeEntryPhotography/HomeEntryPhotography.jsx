import { Link } from "react-router-dom";
import HomeEntry from "../HomeEntry";

const HomeEntryPhotography = ({ posts }) => (
    <HomeEntry
        id="photography"
        latest={
            <div className="home-entry-thumbnail flex flex-wrap gap-4">
                {posts.map((post, index) => (
                    <Link
                        to={`photography#${post.uid}`}
                        className="h-[88px] w-[88px]"
                        key={index}
                    >
                        <img
                            className="object-cover object-center"
                            src={`${import.meta.env.VITE_API_URL}${post.thumbnail?.url}`}
                            alt=""
                        />
                    </Link>
                ))}
            </div>
        }
    />
);

export default HomeEntryPhotography;
