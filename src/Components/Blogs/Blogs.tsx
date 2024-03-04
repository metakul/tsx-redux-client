import { Link } from 'react-router-dom';
import { Button, Card, Inset } from '@radix-ui/themes';
import { useDispatch, useSelector } from 'react-redux';
import { selectedBlogs } from '../../redux/slices/Blogs/BlogSlice';
import { AppDispatch } from '../../redux/store';
import { fetchBlogApiSlice } from '../../redux/slices/Blogs/BlogApiSlice';
import { Ipost } from '../../interfaces/interface';
import { FetchFlogData } from '../../interfaces/interface';

const Blogs = () => {
  const dispatch = useDispatch()
  const blogsData = useSelector(selectedBlogs).blogs

  const handleLoadBlogs = () => {

    const userType: FetchFlogData = {
      userType: "0x710E9161e8A768c0605335AB632361839f761374"
    };
    (dispatch as AppDispatch)(fetchBlogApiSlice(userType));

  }
  return (

    <div className=" sm:w-full overflow-hidden mx-auto">
      {(blogsData as Ipost[]) && (blogsData as Ipost[])?.length > 0 ? (

        (blogsData as Ipost[])?.map((post: Ipost, index: number) => (
          <section key={index} className="relative py-4 ">
            <Card>
              <Inset clip="padding-box" side="top" pb="current">
                <div className="flex flex-col rounded-2.5xl transition-shadow shadow-lg md:flex-row">
                  <figure className="group  md:w-1/2 p-4">
                    <Link to={`/singleBlog/${post.id}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-1/2 object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                      />
                    </Link>
                  </figure>

                  <div
                    className="rounded-b-[1.25rem] p-4 md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]"
                  >
                    <div className="mb-3 flex flex-wrap items-center space-x-1 text-xs">
                      <a
                        href="#"
                        className="font-display text-jacarta-700 hover:text-accent dark:text-jacarta-200"
                      >
                        {post.author}
                      </a>
                      <span className="dark:text-jacarta-400">in</span>
                      <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                        {/* {post.categories.map((category, index) => (
                          <a key={index} href="#">
                            {category}
                          </a>
                        ))} */}
                      </span>
                    </div>

                    <h2
                      className="mb-4 font-display text-md sm:text-2xl"
                    >
                      <Link target='_blank' to={`/singleBlog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                      <span>
                        <time dateTime={post.date}>{post.date}</time>
                      </span>
                      <span>•</span>
                      <span>3 min read</span>
                    </div>
                  </div>
                </div>
              </Inset>
            </Card>
          </section>
        ))
      ) : (
        <div className=" flex flex-row">
          <button
            className="dropdown-toggle m-4 p-4 group group flex  items-center rounded-lg border border-jacarta-100  font-display text-lg font-semibold  transition-colors hover:border-transparent      "

          >

            <span>Loading NFT's from METAKUL Collection.... </span>
          </button>

        </div>
      )}
      <Button onClick={handleLoadBlogs}>
        Load More
      </Button>
    </div>
  );
};

export default Blogs;