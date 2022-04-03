import { Client, LogLevel } from '@notionhq/client'
import {
  ABOUT_TITLE,
  PERSONAL_TIMELINE_TITLE,
  SKILLS_TITLE,
  WEBSITE_DATA_BLOCK_ID,
} from './constants'
import {
  ListBlockChildrenResponse,
  GetBlockResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { WebsiteData, BlockObjectResponse, RichTextItemResponse } from '../interfaces'
/**
 * Initialize Notion client & configure a default db query
 */
export const notion: Client = new Client({
  auth: process.env.NOTION_KEY,
  logLevel: LogLevel.DEBUG,
})

/**
 * Gets the page data from my Personal Site Page in the Agenda 2.0 Database
 * @returns
 */
export const getAllPageBlocks = async () => {
  const response =
    process.env.NOTION_PAGE_ID &&
    (await notion.blocks.children.list({ block_id: WEBSITE_DATA_BLOCK_ID }))
  console.log('response:', response)
  return response as ListBlockChildrenResponse
}

export const getAllBlockData = async () => {
  const allIds = await getAllPageBlocks()
  let returnArray: ListBlockChildrenResponse[] = []
  let count = 0
  while (count < allIds.results.length) {
    const response = await notion.blocks.retrieve({
      block_id: allIds.results[count].id,
    })
    if (response) {
      const children = await notion.blocks.children.list({
        block_id: response.id,
      })
      returnArray.push(children)
    }
    count++
  }
  let returnThing = await formatBlockDataToWebsite(returnArray)
  console.log('return thing:', returnThing)
  return returnThing
}

export const formatBlockDataToWebsite = async (allBlocks: ListBlockChildrenResponse[]) => {
  let websiteData: WebsiteData = {
    about: { aboutParagraph: '' },
    personalTimeline: null,
    projects: null,
    skills: null,
  }
  for (let i = 0; i < allBlocks.length; i++) {
    let block = allBlocks[i]
    let results = block.results[0] as BlockObjectResponse
    if ('paragraph' in results) {
      console.log('HERE? toggle')
      websiteData.about.aboutParagraph =
      results.paragraph.rich_text[0].plain_text
    //   switch (title) {
    //     case ABOUT_TITLE:
    //       if ('paragraph' in children.results[0])
    //         websiteData.about.aboutParagraph =
    //           children.results[0].paragraph.rich_text[0].plain_text
    //       console.log('HERE?', websiteData)
    //       return
    //     case PERSONAL_TIMELINE_TITLE:
    //       if ('code' in children.results[0]) return
    //     // websiteData.personalTimeline = children.results[0].code.rich_text[0].plain_text
    //     case SKILLS_TITLE:
    //       if ('code' in children.results[0]) return
    //     // websiteData.skills = children.results[0].code.rich_text[0].plain_text
    //   }
    }
    if ('code' in results) {
        // websiteData.personalTimeline = children.results[0].code.rich_text[0].plain_text
    }
  }
  console.log('websiteData', websiteData)
  return websiteData
}
