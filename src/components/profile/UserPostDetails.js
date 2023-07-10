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
import ProfileArchive from "./ProfileArchive";
import ProfileProjects from "./ProfileProjects";

export default function UserPostDetails() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Projects",
      value: "projects",
      desc: <ProfileProjects></ProfileProjects>,
    },
    {
      label: "Articles",
      value: "articles",
      desc: <ProfileArticles></ProfileArticles>,
    },
    {
      label: "Archives",
      value: "archives",
      desc: <ProfileArchive></ProfileArchive>,
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