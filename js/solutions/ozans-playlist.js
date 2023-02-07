/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
function removeDuplicates(playlist) {
  return [...new Set(...playlist)]
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
function hasTrack(playlist, track) {
  const playlistSet = new Set(playlist)
  return playlistSet.has(track)
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
function addTrack(playlist, track) {
  const playlistSet = new Set(playlist)
  playlistSet.add(track)
  return [...playlistSet]
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
function deleteTrack(playlist, track) {
  const playlistSet = new Set(playlist)
  playlistSet.delete(track)
  return [...playlistSet]
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
function listArtists(playlist) {
  let artists = new Set(playlist.map(track => track.split(' - ')[1]))

  return [...artists]
}
const playlist = [
  'Onu Alma Beni Al - Sezen Aksu',
  'Famous Blue Raincoat - Leonard Cohen',
  'Rakkas - Sezen Aksu',
];

console.log(listArtists(playlist))
//=> ['Portishead', 'Devendra Banhart']
