import styled from "styled-components";

const Leftside = (props) => {
  return (
      <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo/>
            <Link>Welcome, there!</Link>
          </a>
          <a>
            <AddPhotoText>Add photo info</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <div>
            <span className="firstSpan">Connections</span>
            <span>Grow your network</span>
          </div>
          <img src='/images/widget-icon.svg' alt=''/>
        </Widget>
        <MyItem>
          <img src="/images/item-icon.svg" alt="myItems"/>
          <span>My Items</span>
        </MyItem>
      </ArtCard>

      <ArtCard>
        <ConnectionCard>
            <a>
              <span>Groups</span>
            </a>
            <a>
              <span>Events</span>
              <div></div>
            </a>
            <a>
              <span>Follow Hashtags</span>
            </a>
            <a>
              <span>Discover more</span>
            </a>
          </ConnectionCard>
      </ArtCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 450px;
  margin: 0 10px;
  @media(max-width:768px){
    width: 100%;
  } 
`;


const ArtCard = styled.div`
  overflow: hidden;
  text-align: center;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border:none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgb(0,0,0,0.15);
  padding: 12px, 12px, 12px;
  word-wrap: break-word;
  word-break:break-word;
`;

const CardBackground = styled.div`
  background: url('images/card-bg.svg');
  background-position: center;
  background-size: 462px;
  height: 100px;
  margin: -12px -12px 0
`;

const Photo = styled.div`
  background-image: url('/images/photo.svg');
  box-shadow: none;
  width: 72px;
  height: 72px;
  margin: -38px auto 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-clip:content-box;
  background-size: 60%;
  border: 2px solid white;
  background-color: white;
  border-radius:50% ;
`;

const Link = styled.div`
  font-size: 18px;
  line-height: 1.5;
  color: rgba(0,0,0,0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;

`;
const Widget = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin: 10px 0;
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 0.3s;
    .firstSpan{
      color: rgba(0,0,0,0.6);
      margin-bottom: 10px;
      font-weight: 600;
    }

  }

  &:hover{
    background-color:rgba(0,0,0, 0.05);
  }

`;


const MyItem = styled.div`
  display: flex;
  padding: 10px 10px;
  border-top: 1px solid lightgray;
  transition: all 0.3s;
  span{
    margin-left: 10px;
  }
  &:hover{
    background-color:rgba(0,0,0, 0.05);
  }
`;

const ConnectionCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  a{
    color: black;
    padding: 10px 12px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    &:hover{
      color:#0a66c2;
      text-decoration: underline;
    }

    &:last-child{
      color: rgba(0,0,0,0.6);
      text-decoration: none;
      border-top: 1px solid lightgray;
      transition: all 0.3s;
    }
    &:last-child:hover{
      background-color:rgba(0,0,0,0.05);
    }
    &:nth-child(2){
      div{
        background-image: url('/images/plus-icon.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-clip:content-box;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        transition: all 0.3s;
      }
      div:hover{
        background-color:rgba(0,0,0,0.05);
      }
    }
  }

  

  

 

`;


export default Leftside;