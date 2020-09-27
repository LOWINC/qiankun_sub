import {push} from "connected-react-router";
import React from "react";
import {useDispatch} from "react-redux";

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const goto = () => {
    dispatch(push("/home"));
  };
  return (
    <div>
      子应用 首页
      <button onClick={goto}>home</button>
    </div>
  );
};

export default Index;
