import { PROJECTS } from '@/constants/projects'
import { SOCIAL_MEDIA_HANDLES } from '@/constants/social-media'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const projects:MetadataRoute.Sitemap = PROJECTS.map(proj => {
        return {
            url: proj.deployedLink,
        }
    })
    const socialMedia:MetadataRoute.Sitemap = SOCIAL_MEDIA_HANDLES.map(sc => {
        return {
            url: sc.url,
        }
    })
    return [...projects, ...socialMedia];
}