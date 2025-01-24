import { format } from "date-fns"

import prismadb from "@/lib/prismadb"

import { TopicsClient } from "./components/client"
import { TopicColumn } from "./components/columns"

const SizesPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const topics = await prismadb.topic.findMany({
    orderBy: {
      Name: 'asc'
    }
  })

  const formattedTopics: TopicColumn[] = topics.map((item) => ({
    id: item.TopicId,
    name: item.Name || "",
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <TopicsClient data={formattedTopics} />
      </div>
    </div>
  )
}

export default SizesPage