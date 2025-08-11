import type { StoryblokBase } from "../types/StoryblokBase";

export const getComponent = (componentName: string, blok: Array<StoryblokBase>) => {
    if (!blok || !Array.isArray(blok)) {
        return null;
    }
    return blok.find((blok) => blok.component === componentName);
}