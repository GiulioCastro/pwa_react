import { useState, useEffect } from "react";

import HomeView from "./Home.view";
import { EnumTabs } from "./Home.model";

export default function Home() {
  const [currentTab, setCurrentTab] = useState(EnumTabs.tab1);

  function handleTabChange(event: React.SyntheticEvent, newValue: number) {
    setCurrentTab(newValue);
  }

  useEffect(componentDidMount, []);

  function componentDidMount() {}

  return <HomeView currentTab={currentTab} handleTabChange={handleTabChange} />;
}
