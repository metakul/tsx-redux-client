import MobileTabNavigation from '../../MobileTabNav/mobileVIew'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';
import AddBlogComp from './ShowBlogs';
import AddBlogForm from '../../Forms/AddBlogForm';
import { useSelector } from 'react-redux';
import { selectUserType } from '../../../redux/slices/authSlice';
function index() {
    const userType = useSelector(selectUserType);

    const tabs = [
        { value: <CheckCircleIcon />, content: <AddBlogComp status={"approved"}/>, label: "Approved" },
        { value: <PauseCircleFilledOutlinedIcon />, content: <AddBlogComp status={"pending"}/>, label: "Pending" },
    ];


    return (
        <div>
            <AddBlogForm userType={userType} formEvent={"ADD BLOG"} />

            <MobileTabNavigation tabs={tabs} position='top' />
        </div>
    )
}

export default index
