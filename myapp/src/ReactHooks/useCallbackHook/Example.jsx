import React from "react";
import ParentChildExample from "./ParentChildExample";
import EventListener from "./EventListener";
import DebounceExample from "./DebounceExample";

function Example() {
  return (
    <>
      Preventing Unnecessary Re-renders in Child Components
      <ParentChildExample />
      {/* Handling Event Listeners in Effects */}
      <EventListener />
      {/*  Debouncing or Throttling Callbacks */}
      <DebounceExample />
    </>
  );
}

export default Example;
