import type { StoryblokBase } from "../types/StoryblokBase";

export const getComponent = (componentName: string, blok: Array<StoryblokBase>) => {
    return blok.find((blok) => blok.component === componentName);
}