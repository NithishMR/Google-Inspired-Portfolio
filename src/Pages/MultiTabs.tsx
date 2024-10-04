import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function MultiTabs() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <Tabs defaultValue="All" className="">
          <TabsList className="">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Projects">Projects</TabsTrigger>
            <TabsTrigger value="Images">Images</TabsTrigger>
            <TabsTrigger value="News">News</TabsTrigger>
          </TabsList>
          <TabsContent value="All"></TabsContent>
          <TabsContent value="Projects">Projects</TabsContent>
          <TabsContent value="Images"></TabsContent>
          <TabsContent value="News"></TabsContent>
        </Tabs>
      </div>
    </>
  );
}
export default MultiTabs;
// under developoment
