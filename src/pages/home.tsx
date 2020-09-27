import {push} from "connected-react-router";
import React from "react";
import {useDispatch} from "react-redux";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const goto = () => {
    dispatch(push("/index"));
  };
  return (
    <div>
      子应用 我的
      <button onClick={goto}>index</button>
    </div>
  );
};

export default Home;
