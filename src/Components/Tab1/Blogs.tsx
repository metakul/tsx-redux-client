import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectedBlogs } from '../../redux/slices/Blogs/BlogSlice';
import { AppDispatch } from '../../redux/store';
import { fetchBlogApiSlice } from '../../redux/slices/Blogs/BlogApiSlice';
import { Ipost } from '../../interfaces/interface';
import { FetchBlogData } from '../../interfaces/interface';
import { Grid } from '@mui/material';
import LikeButton from '../Buttons/LikeButton';
import BlogDetails from '../BlogInfoTabs';
import { useEffect } from 'react';

const Blogs = () => {
  // const theme = useTheme()
  const dispatch = useDispatch()
  const blogsData = useSelector(selectedBlogs).blogs

  const handleLoadBlogs = () => {

    const userType: FetchBlogData = {
      userType: "user"
    };
    (dispatch as AppDispatch)(fetchBlogApiSlice(userType));
  }

    useEffect(() => {
      // Load blogs when the component mounts
      handleLoadBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (

    <div className=" sm:w-full overflow-hidden mx-auto">
      {(blogsData as Ipost[]) && (blogsData as Ipost[])?.length > 0 ? (

        (blogsData as Ipost[])?.map((post: Ipost, index: number) => (
          <section key={index} className="relative py-4 ">
            <Box className="flex flex-col rounded-2.5xl border border-jacarta-300 transition-shadow shadow-lg justify-center">

              <div
                className="rounded-[1.25rem] p-4 rounded-[1.25rem] flex-row flex-row justify-center"
              >
                <div className='mb-3 flex flex-wrap items-center space-x-1 text-xs flex-row justify-center'>

                  <Link to={`/singleBlog/${post._id}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-56   w-25 object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                    />
                  </Link>
                </div>
                <Grid container>

                  <Grid item xs={8} md={8} lg={8}>

                    <div className="mb-3 flex flex-wrap items-center space-x-1 ">
                      {/* <a
                        href="#"
                        className="font-display hover:text-accent"
                      >
                        {post.author}
                      </a> */}
                      {/* <span >in</span> */}
                      <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                        {post.categories.map((category, index) => (
                          <a key={index} href="#">
                            {category}
                          </a>
                        ))}
                      </span>
                    </div>

                    <h2
                      className="mb-4 font-display text-md sm:text-2xl"
                    >
                      {post.title
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                      {/* <Link target='_blank' to={`/singleBlog/${post.id}`}>{post.title}</Link> */}
                    </h2>

                  </Grid>
              
                  <Grid item xs={4} md={4} lg={4} className='mx-auto'>
                  <LikeButton />

                  </Grid>
                    <BlogDetails cryptoSymbol={post.cryptoSymbol} _blogId={post._id || ''}/>
                
                    <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                      <span>
                        <time dateTime={post.date}>{post.date}</time>
                      </span>
                      <span>•</span>
                      <span>3 min read</span>
                    </div>

                  
                </Grid>
              
              </div>
              
            </Box>
          </section>
        ))
      ) : (
        <div className=" flex flex-row justify-center">
          <button
            className="dropdown-toggle m-4 p-4 group group flex  items-center rounded-lg border border-jacarta-100  font-display text-lg font-semibold  transition-colors hover:border-transparent      "
          >
            <span>Loading Blogs's from METAKUL Collection.... </span>
          </button>

        </div>
      )}
      <Button  onClick={handleLoadBlogs} className='mx-auto flex flex-row justify-center'>
        Load More
      </Button>
    </div>
  );
};

export default Blogs;