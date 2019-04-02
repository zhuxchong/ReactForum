import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 280px;
  float: right;
`;
export const TopicWrapper = styled.div`
  padding: 15px 0 10px 0;
  overflow: hidden;
  margin-left: -10px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  line-height: 32px;
  height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    height: 32px;
    width: 32px;
    float: left;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
  padding: 20px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .decscription {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;
export const RecommandWrapper = styled.div`
  margin: 10px 0;
  width: 280px;
`;
export const RecommandItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;
export const LoadMore = styled.div`
  width: 90%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #f7f7f7;
  margin: 30px;
  cursor: pointer;
`;
export const BackTop = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  right: 100px;
  bottom: 100px;
`;
