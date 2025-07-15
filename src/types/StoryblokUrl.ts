import type { StoryblokBase } from "./StoryblokBase";

export interface StoryblokUrl extends StoryblokBase {
    id: string,
    url: string,
    linktype: string,
    fieldtype: string,
    cached_url: string
}