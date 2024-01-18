/* eslint-disable require-jsdoc */
async function* getPagedData(url) {
  while (url) {
    const res = await fetch(url, {headers: {'User-Agent': 'xxx'}});
    const body = await res.json();
    let nextPage = res.headers.get('Link')?.match(/<(.*?)>; rel="next"/);
    nextPage = nextPage?.[1];
    url = nextPage;
    for (const v of body) {
      yield v;
    }
  }
}

async function showCommits() {
  const gen01 = getPagedData('https://api.github.com/repos/Ly0403/JavascriptInfo/commits');
  for await (const v of gen01) {
    console.log(v);
  }
}

showCommits();
