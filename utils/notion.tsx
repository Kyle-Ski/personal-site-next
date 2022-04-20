import { Client, LogLevel } from '@notionhq/client'
import {
  ABOUT_TITLE,
  PERSONAL_TIMELINE_TITLE,
  PROJECTS_TITLE,
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

export const formatBlockDataToWebsite = async (
  allBlocks: ListBlockChildrenResponse[]
) => {
  let websiteData: WebsiteData = {
    about: { aboutParagraph: '' },
    personalTimeline: [],
    projects: [],
    skills: [],
  }
  for (let i = 0; i < allBlocks.length; i++) {
    let block = allBlocks[i]
    let results = block.results[0] as BlockObjectResponse
    if (results?.type === 'paragraph') {
      websiteData.about.aboutParagraph = results.paragraph.rich_text[0].plain_text
    }
    if (results?.type === 'code') {
      if (results.code.caption[0].plain_text === PERSONAL_TIMELINE_TITLE) {
        websiteData.personalTimeline = JSON.parse(results.code.rich_text[0].plain_text)
      }
      if (results.code.caption[0].plain_text === SKILLS_TITLE) {
        websiteData.skills = JSON.parse(results.code.rich_text[0].plain_text)
      }
      if (results.code.caption[0].plain_text === PROJECTS_TITLE) {
        websiteData.projects = JSON.parse(results.code.rich_text[0].plain_text)
      }
    }
  }
  console.log('websiteData', websiteData)
  return websiteData
}
