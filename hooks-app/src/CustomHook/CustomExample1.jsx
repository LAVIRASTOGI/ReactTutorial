import React from "react";
import useFetch from "./useFetch";
import useNotification from "./useNotification";

function CustomExample1() {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/users");
  // const { showNotificationHandler, NotificationComp } = useNotification();
  return (
    <>
      {/* <button onClick={() => showNotificationHandler("Clicked Succesfully")}>
        Click me
      </button>
      <NotificationComp /> */}
      {isLoading && <h1>Loading.....</h1>}
      {error ? (
        <h1>{error?.message}</h1>
      ) : (
        <>
          {data?.users.map((ele) => (
            <h1 key={ele?.id}> {ele?.firstName}</h1>
          ))}
        </>
      )}
    </>
  );
}

export default CustomExample1;
