import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: "https://journal.paulvalenzano.com",
  key: "ec4b4c9e1b47fd4fd410a99a10",
  version: "v4",
});

// POSTS

export const getPostSlugs = async () => {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export const getPostFromSlug = async (postSlug) => {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

// PAGES

export const getPageSlugs = async () => {
  return await api.pages
    .browse({
      limit: "all"
    })
    .catch((err) => {
      console.error(err);
    })
}

export const getPageFromSlug = async (pageSlug) => {
  return await api.pages
    .read({
      slug: pageSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

