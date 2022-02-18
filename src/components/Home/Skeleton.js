import React from 'react'
import styled from 'styled-components'

function Skeleton() {
  const count = 10
  return (
    Array(count).fill(
    <Post> 
        <PostHeader>
            <Image>

            </Image>
            <HeaderText>
                <div>
                    
                </div>
                <div>

                </div>
            </HeaderText>
            
        </PostHeader>

        <PostImage></PostImage>
        <PostDes>
            <div></div>
        </PostDes>
    </Post>
    )
  )
}

export default Skeleton

const Post = styled.div`
   width: 100%;
   background: rgba(69, 70, 73,0.1);
   margin-top: 20px;
`

const PostHeader = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   padding: 10px 10px;
`

const Image = styled.div`
   width: 62px;
   height: 62px;
   background-color: rgba(69, 70, 73,0.1);
   border-radius: 50%;
   animation: loading 1s linear infinite alternate;
   @keyframes loading {
    0%{
      background-color: rgba(69, 70, 73,0.1);
    }

    100%{
      background-color: rgba(69, 70, 73,0.2);
    }
  }
`

const HeaderText = styled.div`
   width: 100%;
   margin: 0 12px;
  div{
    height: 15px;
    background-color: rgba(69, 70, 73,0.1);
    margin: 5px 0px;
    animation: loading 1s linear infinite alternate;
  }
  div:nth-child(1){
      width: 40%;
  }
  div:nth-child(2){
      width: 15%;
  }
`

const PostImage = styled.div`
  width: 100%;
  height: 55vh;
  background: rgba(69, 70, 73,0.1);
  margin: 8px 0px;
  animation: loading 1s linear infinite alternate;
`

const PostDes = styled.div`
   padding: 10px 0px;
   width: 100%;
   margin: 0 12px;
  div{
    width: 25%;
    height: 15px;
    background-color: rgba(69, 70, 73,0.1);
    margin: 5px 0px;
    animation: loading 1s linear infinite alternate;
  }
`
