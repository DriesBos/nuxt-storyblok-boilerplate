export default function({ store }) {
  if (!store.state.cacheVersion) {
    store.dispatch("loadCacheVersion")
  }
}
