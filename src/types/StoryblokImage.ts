import type { StoryblokBase } from "./StoryblokBase";

export interface StoryblokImage extends StoryblokBase {
    id: string,
    alt: string,
    name: string,
    focus: string,
    title: string,
    source: string,
    filename: string,
    copyright: string,
    fieldtype: string,
    meta_data: Object
}