import React from 'react';
import Profile from '../components/Profile';
import YourPosts from '../components/YourPosts';
import YourSavedPosts from '../components/YourSavedPosts';

function ProfilePage() {
    // const [yourPosts, setYourPosts] = useState([]);
    // try {
    //     const { data } = await api.searchYourPosts({ title: form.search });
    //     console.log("data from server: ", data);
    //     setYourPosts(data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    return(
        <>
        <Profile />
        <YourPosts />
        <YourSavedPosts />
        </>
    )
}

export default ProfilePage;