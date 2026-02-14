import { Link } from "react-router-dom";
import HomeEntry from "../HomeEntry";

const HomeEntryMusic = ({ posts }) => (
    <HomeEntry
        id="music"
        latest={
            <div className="home-entry-thumbnail flex flex-wrap gap-4">
                {posts.map((post, index) => (
                    <Link
                        to={`music#${post.uid}`}
                        className="h-[88px] w-[88px]"
                        key={index}
                    >
                        <img
                            className="object-cover object-center"
                            src={`http://localhost:1337` + post.thumbnail?.url}
                            alt=""
                        />
                    </Link>
                ))}
            </div>
        }
    />
);

export default HomeEntryMusic;
