import { get } from '@vercel/edge-config';

// 默认文案
const defaultCopy = {
  main_title: "Meituan UAV"
};

export async function GET() {
  try {
    const title = await get('main_title') || defaultCopy.main_title;
    return Response.json({ success: true, copy: { main_title: title } });
  } catch (error) {
    return Response.json({ success: true, copy: defaultCopy });
  }
}