"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function MultiTabs() {
  return (
    <div className="flex justify-center mt-8">
      <Tabs defaultValue="All" className="w-[80%]">
        <TabsList className="mb-4 border-b">
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Projects">Projects</TabsTrigger>
          <TabsTrigger value="Images">Images</TabsTrigger>
          <TabsTrigger value="News">News</TabsTrigger>
        </TabsList>

        <TabsContent value="All">
          <div className="text-gray-700">
            <p>Showing all content across Projects, Images, and News.</p>
          </div>
        </TabsContent>

        <TabsContent value="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded shadow-sm">
              Project 1: Google-Inspired Portfolio
            </div>
            <div className="p-4 border rounded shadow-sm">
              Project 2: EverHome Realty
            </div>
            <div className="p-4 border rounded shadow-sm">
              Project 3: Personal Blog
            </div>
          </div>
        </TabsContent>

        <TabsContent value="Images">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/images/sample1.jpg" alt="Sample 1" className="rounded" />
            <img src="/images/sample2.jpg" alt="Sample 2" className="rounded" />
            <img src="/images/sample3.jpg" alt="Sample 3" className="rounded" />
            <img src="/images/sample4.jpg" alt="Sample 4" className="rounded" />
          </div>
        </TabsContent>

        <TabsContent value="News">
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>New feature added to portfolio website.</li>
            <li>Published a technical blog on Next.js App Router.</li>
            <li>Started working on EverHome Realty project updates.</li>
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MultiTabs;
