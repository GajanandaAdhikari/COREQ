import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CirculateArchive from "./CirculateArchive";
import CirculateArticles from "./CirculateArticle";
import CirculateProjects from "./CirculateProjects";
import CirculateQueries from "./CirculateQueries";


export default function CirculatePost() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Archives",
      value: "archives",
      desc: <CirculateArchive/>,
    },
    {
      label: "Articles",
      value: "articles",
      desc: <CirculateArticles/>,
    },
    {
      label: "Projects",
      value: "projects",
      desc: <CirculateProjects/>,
    },
    {
      label: "Queries",
      value: "queries",
      desc: <CirculateQueries/>,
    },

  ];
  return (
    <div className="mt-8 w-fit">
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
    </div>
  );
}



