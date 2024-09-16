// Example: src/components/RoleList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchRoles } from "../redux/slices/roleSlice";
import { fetchRoles } from "../src/redux/slices/roleSlice"
import Spinner from "./assets/Spinner";

const RoleList = () => {
  const dispatch = useDispatch();
  const { roles, loading, error } = useSelector((state) => state.roles);


  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  if (loading) return <Spinner/>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="flex justify-center items-center flex-col gap-2">
      {roles.map((role) => (
        <li key={role._id}><h1 className="text-4xl">{role.name} "hi"</h1> {"  "} {role.description}</li>
       
        ))}
    </ul>
  );
};

export default RoleList;
