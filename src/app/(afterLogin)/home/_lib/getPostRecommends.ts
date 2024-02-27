export async function getPostRecommends() {
  const res = await fetch('http://localhost:9090/api/postRecommends', {
    next: {
      tags: ['posts', 'recommends'],
    },
  });

  if (!res.ok) {
    throw new Error('Post recommends request failed');
  }

  return res.json();
}
