import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ProfileQueries from "./ProfileQueries";
import ProfileArticles from "./ProfileArticles";

export default function UserPostDetails() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Projecs",
      value: "projects",
      desc: <ProfileQueries></ProfileQueries>,
    },
    {
      label: "Articles",
      value: "articles",
      desc: <ProfileArticles></ProfileArticles>,
    },
    {
      label: "Archieves",
      value: "archieves",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Queries",
      value: "queries",
      desc: <ProfileQueries></ProfileQueries>,
    },

  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className: "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-blue-500" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}