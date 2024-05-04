import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedBlogs } from '../../redux/slices/Blogs/BlogSlice';
import { Box, Button, Typography } from '@mui/material';
import { getColors } from '../../layout/Theme/themes';
import { useParams } from 'react-router-dom';
import { selectUserType } from '../../redux/slices/authSlice';
import BreadCrumbs from '../elements/BreadCrumbs';
import { AppDispatch } from '../../redux/store';
import { FetchBlogData } from '../../interfaces/interface';
import { fetchSingleBlogApiSlice } from '../../redux/slices/Blogs/BlogApiSlice';
import { Helmet } from 'react-helmet';
import { handleShare, parseHTML, renderCustomStyles } from '../../scripts/handleBlogCss';

const SingleBlogDetails = () => {

  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch()

  const currentDomain = window.location.origin;
  const postLink = `${currentDomain}/blogDetails/${id}`;


  const userType = useSelector(selectUserType);
  const handleLoadBlogs = () => {

    const loadForUser: FetchBlogData = {
      userType: userType,
    };
    if (id) {
      (dispatch as AppDispatch)(fetchSingleBlogApiSlice({
        fetchBlogData: loadForUser,
        id
      }));
    }
  }

  useEffect(() => {
    // Load blogs when the component mounts
    handleLoadBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userType, id]);

  console.log("in SingleBlogDetails", id);

  const blogsData = useSelector(selectedBlogs).blogs;
  const selectedBlog = blogsData.find((blog) => blog._id === id);

  const truncatedDescription = selectedBlog?.description
  const image = selectedBlog?.image
  const title = selectedBlog?.title
  const author = selectedBlog?.author



  return (
    <div className='px-8 mt-4'>

      <Helmet>
        <title>{title}</title>
        <meta name="description" content={truncatedDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={truncatedDescription} />
        {/* Add more meta tags as needed */}
      </Helmet>


      {truncatedDescription && (
        <>
          <BreadCrumbs currentPath={location.pathname} />
          <div>
            <div className="flex mt-6 flex-wrap justify-between items-center space-x-2 text-md mb-2 text-jacarta-400">
              <Button variant='contained' sx={{
                position: "fixed",
                background: getColors().blueAccent[800],
                color: getColors().blueAccent[100]
              }} onClick={() => window.history.back()}>
                Back
              </Button>
              <Button
                variant='contained'
                sx={{
                  position: "fixed",
                  right: "40px", // Aligning the button to the right edge
                  background: getColors().blueAccent[800],
                  color: getColors().blueAccent[100]
                }}
                onClick={()=>handleShare(postLink)}
              >
                Share
              </Button>

            </div>
            <Typography variant='h3' sx={{
              m: 4,
              mb: 1
            }}>
              {title}
            </Typography>
            <Typography variant='h5' sx={{ ml: 4 }}>
              Author: {author}
            </Typography>
            <Box sx={{
              display: "flex",
              justifyContent: "center",
              mb: 4
            }}>
              <img
                src={`data:image/png;base64,${image}`}
                alt={"Post image"}
                className=" w-80 sm:h-3/4 object-cover transition-transform duration-[100ms] will-change-transform group-hover:scale-105"
              />

            </Box>
            {parseHTML(truncatedDescription).map((node, index) => renderCustomStyles(node, index))}


          </div>
        </>
      )}

    </div>
  );
};

export default SingleBlogDetails;
