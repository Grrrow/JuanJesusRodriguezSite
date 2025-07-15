import type { StoryblokBase } from "./StoryblokBase";
import type { StoryblokImage } from "./StoryblokImage";
import type { StoryblokMenuItem } from "./StoryblokMenuItem";
import type { StoryblokUrl } from "./StoryblokUrl";

export interface StoryblokHeader extends StoryblokBase {
    title: string;
    titleLink: StoryblokUrl;
    menu: Array<StoryblokMenuItem>;
    logo: StoryblokImage;
}