import { Link } from "react-router-dom";
import HomeEntry from "../HomeEntry";

const HomeEntryBlog = ({ posts }) => (
    <HomeEntry
        id="blog"
        latest={
            <div className="home-entry-thumbnail home-entry-thumbnail-blog flex flex-col gap-4">
                {posts.map((post, index) => (
                    <Link to={`blog/${post.uid}`} key={index}>
                        <div className="flex gap-4">
                            <div className="flex h-[88px] w-[88px]">
                                <img
                                    className="object-cover object-center h-[88px] w-[88px] min-w-[88px]"
                                    src={`${import.meta.env.VITE_API_URL}${post.thumbnail?.url}`}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="font-semibold underline w-[90%]">
                                    {post.title}
                                </p>
                                <p className="font-light leading-5 w-[90%]">{post.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        }
    />
);

export default HomeEntryBlog;
