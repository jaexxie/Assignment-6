export function sortByTitle(movies) {
  return [...movies].sort((a, b) => a.title.localeCompare(b.title));
}

export function sortByRating(movies) {
  return [...movies].sort((a, b) => b.rating - a.rating);
}
