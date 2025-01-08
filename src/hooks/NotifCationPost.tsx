import styled from "styled-components";

const Notif = styled.div`
  margin-top: 20px;
  background-color: white;
  padding-left: 50px;
  padding-right: 40px;
  gap: 20px;
  text-align: left;
  border-bottom: 0.5px solid #808080;
  padding-bottom: 20px;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: -30px;
`;
const Img = styled.img`
  height: 38px;
  width: 38px;
  border-radius: 50%;
`;

const NotifCationPost = () => {
     const data=[
        {imageUrl:"/pfp/Donald_Trump.jpg",text:"Donald J. Trump followed you",para:"",},
        {imageUrl:"/pfp/Nirbhay_Singh.jpg",text:"There was a login to your account @user from a new device on January 2, 2025. Review it now",},
        {imageUrl:"pfp/Heads_Up.jpg",text:"Heads_Up reposted your repost",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cupiditate. https://pic.x.com/RfD34mjnRR",},
        {imageUrl:"pfp/Nirbhay_Singh.jpg",text:" Nirbhay Singh followed you",para:""},
        {imageUrl:"pfp/Heads_Up.jpg",text:"Heads_Up  followed you",para:""},
        {imageUrl:" pfp/Nasa.jpg" ,text:"NASA liked your post",para:"#AirDroidParentalControl is a powerful parental monitoring app loaded with tools to keep an eye on your kids smartphone usage. Explore more : bit.ly/3e9mVZF",},
        
      ]
  return (
    <>
      {data.map((index, value) => {
          return (
            <Notif key={value}>
              <Img src={index.imageUrl}></Img>
              <Span></Span>
              <b>{index.text}</b>
              <p>{index.para}</p>
            </Notif>
        
        
      );
    })} 
    </>
  )
}
export default NotifCationPost;