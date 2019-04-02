import styled from "styled-components";
import logoPoc from "../../statics/logo.svg";
export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: solid 1px #f0f0f0;
  position: relative;
  z-index: 1;
`;

export const Logo = styled.div`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  display: block;
  background: url(${logoPoc});

  background-size: 100px 56px;
`;
export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
`;
export const SearchWrapper = styled.div`
  float: left;

  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "Search"
})`
  margin-top: 9px;
  margin-left: 20px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  height: 40px;
  width: 160px;
  border: none;
  outline: none;
  border-radius: 19px;
  background-color: #eeeeee;
  font-size: 14px;
  color: #777;
  &.slide-enter {
    width: 160px;
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
    transition: all 0.2s ease-out;
  }
`;
export const Addtion = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  line-height: 36px;
  border-radius: 19px;
  margin-top: 9px;
  border: solid 1px #ec6149;
  margin-right: 20px;
  padding: 0 25px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
    height: 38px;
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 20px 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
`;
export const SearchInfoItem = styled.a`
  padding: 0 5px;
  line-height: 20px;
  border: solid 1px darkgray;
  color: #333333;
  border-radius: 2px;
  display: block;
  font-size: 12px;
  float: left;
  margin-right: 12px;
  margin-bottom: 15px;
`;
