import MobileTabNavigation from '../../MobileTabNav/mobileVIew'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';
import AddBlogComp from './ShowBlogs';
import AddBlogForm from '../../Forms/AddBlogForm';
function index() {

    const tabs = [
        { value: <CheckCircleIcon />, content: <AddBlogComp status={"approved"}/>, label: "Approved" },
        { value: <PauseCircleFilledOutlinedIcon />, content: <AddBlogComp status={"pending"}/>, label: "Pending" },
    ];


    return (
        <div>
            <AddBlogForm  formEvent={"ADD BLOG"} />

            <MobileTabNavigation tabs={tabs} position='top' />
        </div>
    )
}

export default index
