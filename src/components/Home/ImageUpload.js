import React, { useEffect, useState } from 'react'
import { collection, Timestamp , addDoc } from 'firebase/firestore'
import { db, storage } from '../../firebase'
import { getDownloadURL, uploadBytesResumable , ref} from 'firebase/storage'
import SearchIcon from '@mui/icons-material/Search';


function ImageUpload() {
  const [prograsse , setPrograsse] = useState(0)
  const [postData , setPostData] = useState({
    caption:" ",
    userName:"",
    image:"",
    userImage:"",
    createDate:Timestamp.now().toDate()
  })

  useEffect(() => {

  },[])

  const HandlecaptionChnage = (e) => {
    setPostData({...postData, caption:e.target.value})
  }

  const handlImageChnge = (e) => {
      setPostData({...postData, image:e.target.files[0]})
  }

  const handleUpload = () => {
    if(!postData.caption || !postData.image ){
      alert("please fill the blanks")
    }

    const stoarageRef = ref(storage , `/images/${Date.now()}${postData.image.name}` )
    const uploadImage = uploadBytesResumable(stoarageRef , postData.image)
    uploadImage.on("state_changed" , (snapshot) => {
      const prograssent = Math.round( (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      setPrograsse(prograssent)
    },(err) =>{
         console.log(err)
    },() => {
      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const postRef = collection(db , "post")
          try{
              addDoc(postRef, {
                caption:postData.caption,
                UserName:localStorage.getItem("UserName"),
                ImgaeUrl:url,
                userImage:localStorage.getItem("Photo"),
                createDate:Timestamp.now().toDate()
              }).then(() => {
                 setPrograsse(0)
                 
              }).catch((err) => {
                console.log("something went wrong")
              })
          }catch(err){
            console.log(err)
          }
      })
    }
    )
  }

  const inputload = () => {
    const load = document.querySelector(".imageUploader")
    load.click()
  }

  return (
    <div className='upload-Image'>

      <label >
           <SearchIcon />
           <input type="text" placeholder='Enter a Caption...' onChange={(e) => HandlecaptionChnage(e)}/>
      </label>
      <div className='button'>
        <input type="file" onChange={(e) => handlImageChnge(e)} className="imageUploader"/>
        <button onClick={handleUpload}><img  style={{width:'25px'}} src="https://img.icons8.com/color/48/4a90e2/upload--v1.png"/> Upload</button>
        <button onClick={inputload} ><img src='images/uploadImg.svg'/> Image </button>
      </div>
      <div className='bar' style={{width:`${prograsse}%`}}>

      </div>
    </div>
  )
}

export default ImageUpload