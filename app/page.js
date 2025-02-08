import React from "react";
import AuthWrapper from "./components/AuthWrapper";
import Home from "./dashboard/Home";
export default function page() {
  return (
    <AuthWrapper>
      <Home />
    </AuthWrapper>
  );
}
