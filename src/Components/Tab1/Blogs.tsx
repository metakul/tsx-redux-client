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
import { SetStateAction, useEffect, useState } from 'react';
import LikeButton from '../Buttons/LikeButton';
import { selectUserType } from '../../redux/slices/authSlice';

const Blogs = () => {
  // const theme = useTheme()
  const dispatch = useDispatch()
  const blogsData = useSelector(selectedBlogs).blogs
  const [blogPage, setBlogPage] = useState(1);
  const [pageSize,] = useState(2);
  const [openedBlogId, setOpenedBlogId] = useState<string | null>(null);
  const userType = useSelector(selectUserType);
  const handleLoadBlogs = () => {

    const loadForUser: FetchBlogData = {
      userType: userType,
    };
    (dispatch as AppDispatch)(fetchBlogApiSlice({
      fetchBlogData: loadForUser,
      pageSize,
      blogPage,
      setBlogPage,
    }));
  }

   // Get current domain dynamically
   const currentDomain = window.location.origin;

  useEffect(() => {
    // Load blogs when the component mounts
    handleLoadBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenBlogs = (postId: SetStateAction<string | null> = null) => {
    setOpenedBlogId(postId === openedBlogId ? null : postId);
  };
  
  
  return (

    <div className=" sm:w-full overflow-hidden mx-auto">
      {(blogsData as Ipost[]) && (blogsData as Ipost[])?.length > 0 ? (

        (blogsData as Ipost[])?.map((post: Ipost, index: number) => (
          <section key={index} className="relative py-4 ">
           
            <Box className="flex flex-col rounded-2.5xl border border-jacarta-300 transition-shadow shadow-lg justify-center">

              <div
                className="rounded-[1.25rem] p-4 flex-row justify-center"
              >
                <div className='mb-3 flex flex-wrap items-center space-x-1 text-xs flex-row justify-center'>

                  <img
                    src={`data:image/png;base64,${post.image}`}
                    alt={post.title}
                    className=" w-80 sm:h-3/4 object-cover transition-transform duration-[100ms] will-change-transform group-hover:scale-105"
                    onClick={() => handleOpenBlogs(post._id)}
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
                    <ShareButton link={ `${currentDomain}/blogDetails/${post._id}`}/>
                    <LikeButton />

                  </Grid>
                  <h2
                      className="mb-4 font-display text-md "
                      onClick={() => handleOpenBlogs(post._id)}
                      >
                      {post.title
                        .split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')}
                      {/* <Link target='_blank' to={`/singleBlog/${post.id}`}>{post.title}</Link> */}
                    </h2>
                  <BlogDetails isBlogInfoOpen={openedBlogId === post._id} cryptoSymbol={post.cryptoSymbol} _blogId={post._id || ''} />
                  
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