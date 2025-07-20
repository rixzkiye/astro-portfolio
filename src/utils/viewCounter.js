import fs from 'fs/promises';
import path from 'path';

const VIEWS_FILE = path.resolve(process.cwd(), '.viewcounts/views.json');

async function getViews() {
  try {
    const data = await fs.readFile(VIEWS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {};
    }
    throw error;
  }
}

async function saveViews(views) {
  await fs.writeFile(VIEWS_FILE, JSON.stringify(views, null, 2), 'utf-8');
}

export async function incrementView(pageId) {
  const views = await getViews();
  views[pageId] = (views[pageId] || 0) + 1;
  await saveViews(views);
  return views[pageId];
}

export async function getViewCount(pageId) {
  const views = await getViews();
  return views[pageId] || 0;
}
