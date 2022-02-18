import { react , useState , useEffect } from 'react';
import './App.css';
import Post from './Post'
import {auth, db} from '../../firebase';
import {collection , getDocs, onSnapshot, orderBy, query} from "firebase/firestore" 
import ImageUpload from './ImageUpload';
import Header from './Header';
import Skeleton from './Skeleton'
import { useNavigate } from 'react-router-dom';

function Home({isLogged}) {
  const [posts , setPost] = useState([])
  const postCollection = collection(db , "post")
  const [isloading , setLoding] = useState(false)

  let navigate = useNavigate()

  useEffect(() => {
        if(localStorage.getItem("auth") == undefined){
                  navigate("/")
        }

        const Query  = query(postCollection , orderBy("createDate" , "desc"))
        onSnapshot(Query , (snapshot) => {
            const posts = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))
            setPost(posts)
            setTimeout(() => {
              setLoding(!isloading)
            }, 5000);
            
     })
  },[])

  return (
    <div className="container home-page">
      <Header />
       <div className="row">

          <div className="col-md-3">

         </div>

         <div className="col-md-6 main-post-sec">
            
              <div className="App">
              <ImageUpload />
              {isloading ? (
                <div className='all-post'>
                  {
                    posts.map((post) => {
                      return <Post  key={post.id} UserName={post.UserName} caption={post.caption} ImgaeUrl={post.ImgaeUrl} date={post.createDate.toDate().toDateString()} userImage={post.userImage} />
                    })
                  }
                </div>
              ):(
                  <Skeleton />
              )}
                
                
            </div>
         </div>
         
         <div className="col-md-3">

         </div>
       </div>
    </div>
  );
}

export default Home;
