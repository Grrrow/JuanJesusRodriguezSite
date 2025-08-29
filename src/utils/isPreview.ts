export default function isPreview() {
    console.log("PREVIEW", import.meta.env.STORYBLOK_IS_PREVIEW);
    return import.meta.env.STORYBLOK_IS_PREVIEW === 'yes'
  }