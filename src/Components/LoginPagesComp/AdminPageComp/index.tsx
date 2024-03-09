import React from 'react';

import AddBlogForm from '../../Forms/AddBlogForm.tsx';
import MobileTabNavigation from '../../MobileTabNav/mobileVIew.tsx';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';

const AdminPage: React.FC = () => {
  const handleAddBlog = (data: unknown) => {
    console.log(data)
  };
  const tabs = [
    { value: <OtherHousesOutlinedIcon />, content: <AddBlogForm onFormSubmit={handleAddBlog} />, label: "Add Blog" },
  
  ];
  return <div>
      <MobileTabNavigation tabs={tabs} />
  </div>;

};


export default AdminPage