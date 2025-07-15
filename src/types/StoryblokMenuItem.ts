import type { StoryblokBase } from "./StoryblokBase";
import type { StoryblokUrl } from "./StoryblokUrl";

export interface StoryblokMenuItem extends StoryblokBase {
    label: string;
    link: StoryblokUrl
}