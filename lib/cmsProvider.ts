import { Post } from '@/app/blog/page';
import { createClient } from 'next-sanity'

interface SanityConfig {
  projectId: string;
  dataset: string;
  apiVersion: string;
  useCdn: boolean;
}

export class SanityService {
  private client;
  config: SanityConfig;

  constructor(config: SanityConfig) {
    this.client = createClient(config);
    this.config = config;
  }

  async getAllPosts(): Promise<Post[]> {
      const query = encodeURIComponent(`
      *[_type == "post"] | order(_createdAt desc) {
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        excerpt,
        "mainImage": mainImage.asset->url,
        "categories": categories[]->title,
        "author": author->{
          _id,
          name,
          "image": image.asset->url
        }
      }
    `);
      const projectId = this.config.projectId;
      const dataset = this.config.dataset;
      const apiVersion = this.config.apiVersion;
      const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

      const response = await fetch(url);
      const { result } = await response.json();
      return result;
    //   return this.client.fetch(`
    //   *[_type == "post"] | order(_createdAt desc) {
    //     _id,
    //     _createdAt,
    //     title,
    //     "slug": slug.current,
    //     excerpt,
    //     "mainImage": mainImage.asset->url,
    //     "categories": categories[]->title,
    //     "author": author->{
    //       _id,
    //       name,
    //       "image": image.asset->url
    //     }
    //   }
    // `,
    //       {},
    //       {
    //           cache: 'no-cache'
    //       });
  }
  async getPostBySlug(slug: string): Promise<Post> {
    const query = encodeURIComponent(`*[_type == "post" && slug.current == "${slug}"][0] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      excerpt,
      body,
      "mainImage": mainImage.asset->url,
      "categories": categories[]->title,
      "author": author->{
        _id,
        name,
        "image": image.asset->url
      },
      content
    }`);
    
    const projectId = this.config.projectId;
    const dataset = this.config.dataset;
    const apiVersion = this.config.apiVersion;
    
    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
    
    const response = await fetch(url);
    const { result } = await response.json();
    
    // Sanity API returns the result array, but we want just the first item
    return result;
  }

//   async getPostBySlug(slug: string): Promise<Post> {
//   const query = encodeURIComponent(`*[_type == "post" && slug.current == "${slug}"][0] {
//     _id,
//     _createdAt,
//     title,
//     "slug": slug.current,
//     excerpt,
//     body,
//     "mainImage": mainImage.asset->url,
//     "categories": categories[]->title,
//     "author": author->{
//       _id,
//       name,
//       "image": image.asset->url
//     },
//     content
//   }`);
  
//   const projectId = this.config.projectId;
//   const dataset = this.config.dataset;
//   const apiVersion = this.config.apiVersion;
  
//   const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;
  
//   const response = await fetch(url);
//   const { result } = await response.json();
  
//   // Sanity API returns the result array, but we want just the first item
//   return result;
// }
}