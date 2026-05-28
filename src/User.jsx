import React from "react";
import { login, logout } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
export default function User() {
  const user = useSelector((state) => state.user);
  const Dispatch = useDispatch();
  return (
    <div>
      User:{user.name}
      <p>
        <button onClick={() => Dispatch(login("John"))}>Login</button>
        <button onClick={() => Dispatch(logout())}>Logout</button>
      </p>
    </div>
  );
}
