import { Link } from 'react-router-dom';
import {Button, Box} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectedBlogs } from '../../redux/slices/Blogs/BlogSlice';
import { AppDispatch } from '../../redux/store';
import { fetchBlogApiSlice } from '../../redux/slices/Blogs/BlogApiSlice';
import { Ipost } from '../../interfaces/interface';
import { FetchBlogData } from '../../interfaces/interface';
import {  Grid } from '@mui/material';
import LikeButton from '../Buttons/LikeButton';

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
  return (

    <div className=" sm:w-full overflow-hidden mx-auto">
      {(blogsData as Ipost[]) && (blogsData as Ipost[])?.length > 0 ? (

        (blogsData as Ipost[])?.map((post: Ipost, index: number) => (
          <section key={index} className="relative py-4 ">
                <Box className="flex flex-col rounded-2.5xl transition-shadow shadow-lg justify-center">

                  <div
                    className="rounded-b-[1.25rem] p-4 md:rounded-none md:rounded-r-[1.25rem] flex-row flex-row justify-center"
                  >
                    <div className='mb-3 flex flex-wrap items-center space-x-1 text-xs flex-row justify-center'>

                      <Link to={`/singleBlog/${post.id}`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className=" object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                          height="300px"
                          width="300px"
                        />
                      </Link>
                    </div>
                    <Grid container>
                      <Grid item xs={8} md= {8} lg={8}>
                        
                    <div className="mb-3 flex flex-wrap items-center space-x-1 ">
                      <a
                        href="#"
                        className="font-display hover:text-accent"
                      >
                        {post.author}
                      </a>
                      <span >in</span>
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
                      <Link target='_blank' to={`/singleBlog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <div className="flex flex-wrap items-center space-x-2 text-sm text-jacarta-400">
                      <span>
                        <time dateTime={post.date}>{post.date}</time>
                      </span>
                      <span>•</span>
                      <span>3 min read</span>
                    </div>
                      </Grid>
                      <Grid item xs={4} md= {4} lg={4} sx={{
                        // backgroundColor:theme.palette.colors.colors.primary[600],
                      }} >
                      <LikeButton/>
                      </Grid>

                    </Grid>

                  </div>
                </Box>
          </section>
        ))
      ) : (
        <div className=" flex flex-row">
          <button
            className="dropdown-toggle m-4 p-4 group group flex  items-center rounded-lg border border-jacarta-100  font-display text-lg font-semibold  transition-colors hover:border-transparent      "

          >

            <span>Loading Blogs's from METAKUL Collection.... </span>
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