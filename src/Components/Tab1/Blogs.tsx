import { Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectedBlogs } from '../../redux/slices/Blogs/BlogSlice';
import { AppDispatch } from '../../redux/store';
import { fetchBlogApiSlice } from '../../redux/slices/Blogs/BlogApiSlice';
import { Ipost } from '../../interfaces/interface';
import { FetchBlogData } from '../../interfaces/interface';
import { Grid } from '@mui/material';
import ShareButton from '../Buttons/ShareButton';
import BlogDetails from '../BlogInfoTabs';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import LikeButton from '../Buttons/LikeButton';
const Blogs = () => {
  // const theme = useTheme()
  const dispatch = useDispatch()
  const blogsData = useSelector(selectedBlogs).blogs
  const [blogPage, setBlogPage] = useState(1);
  const [pageSize,] = useState(2);

  const handleLoadBlogs = () => {

    const userType: FetchBlogData = {
      userType: "user",
    };
    (dispatch as AppDispatch)(fetchBlogApiSlice({
      fetchBlogData: userType,
      pageSize,
      blogPage,
      setBlogPage,
    }));
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
            <Helmet>
              <title>{post.title}</title>
              <meta name="description" content={post.description} />
              {/* Add more meta tags as needed */}
            </Helmet>
            <Box className="flex flex-col rounded-2.5xl border border-jacarta-300 transition-shadow shadow-lg justify-center">

              <div
                className="rounded-[1.25rem] p-4 flex-row justify-center"
              >
                <div className='mb-3 flex flex-wrap items-center space-x-1 text-xs flex-row justify-center'>

                  <img
                    src={post.image}
                    alt={post.title}
                    className=" w-80 sm:h-3/4 object-cover transition-transform duration-[100ms] will-change-transform group-hover:scale-105"
                  />
                </div>
                <Grid container className='mt-8'>

                  <Grid item xs={8} md={8} lg={8}>

                      {/* <a
                        href="#"
                        className="font-display hover:text-accent"
                      >
                        {post.author}
                      </a> */}
                      {/* <span >in</span> */}
                      <span className="inline-flex flex-wrap items-center space-x-1 text-accent">
                        {post.categories.map((category, index) => (
                          <h5 key={index} >
                            {category}
                          </h5>
                        ))}
                      </span>

               

                  </Grid>
                  <Grid item xs={4} md={4} lg={4} className='mx-auto flex items-end justify-around pr-8 pb-4'>
                    <ShareButton />
                    <LikeButton />

                  </Grid>
                  <h2
                      className="mb-4 font-display text-md "
                    >
                      {post.title
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                      {/* <Link target='_blank' to={`/singleBlog/${post.id}`}>{post.title}</Link> */}
                    </h2>
                  <BlogDetails cryptoSymbol={post.cryptoSymbol} _blogId={post._id || ''} />
                  
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
      <Button onClick={handleLoadBlogs} className='mx-auto flex flex-row justify-center'>
        Load More
      </Button>
    </div>
  );
};

export default Blogs;