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

  constructor(config: SanityConfig) {
    this.client = createClient(config);
  }

  async getAllPosts(): Promise<Post[]> {
    return this.client.fetch(`
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
  }

  async getPostBySlug(slug: string): Promise<Post> {
    const [post] = await this.client.fetch(`
      *[_type == "post" && slug.current == $slug] {
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
      }
    `, { slug });
    return post;
  }
}