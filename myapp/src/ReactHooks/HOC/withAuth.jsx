import React, { useEffect, useState } from "react";

function withAuth(WrappedComponent) {
  return function NewComponent(props) {
    const [user, setUser] = useState(null);
    useEffect(() => {
      // API call for auth
      const token = localStorage.getItem("token");
      if (token) {
        setUser({ name: "lavi" });
      } else {
        // setUser({ name: "lavi" });
        setUser(null);
        // also can push route to login page here only
      }
    }, []);
    return <WrappedComponent {...props} user={user} />;
  };
}

export default withAuth;
