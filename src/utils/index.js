// eslint-disable-next-line no-restricted-globals
export function parseUrlStrParams(url = location.search) {
  const result = {};
  url
    .replace(/^\?/, '')
    .split('&')
    .filter(i => i)
    .forEach(item => {
      const arg = item.split('=');
      result[arg[0]] = arg[1] || true;
    });
  return result;
}
