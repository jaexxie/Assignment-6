export default function sortByTitle(movies) {
  return [...movies].sort((a, b) => a.title.localeCompare(b.title));
}

export default function sortByRating(movies) {
  return [...movies].sort((a, b) => b.rating - a.rating);
}
