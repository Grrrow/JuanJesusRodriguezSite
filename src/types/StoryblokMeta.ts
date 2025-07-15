import type { StoryblokBase } from "./StoryblokBase";
import type { StoryblokImage } from "./StoryblokImage";
import type { StoryblokUrl } from "./StoryblokUrl";

export interface StoryblokMeta extends StoryblokBase {
  title: string;
  description: string;
  shortDescription: string;
  route: StoryblokUrl;
  image: StoryblokImage;
}