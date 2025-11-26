'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [title, setTitle] = useState('加载中...');

  useEffect(() => {
    fetch('/api/config').then(r => r.json()).then(d => setTitle(d.copy.main_title));
  }, []);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3em', color: '#0070f3' }}>{title}</h1>
    </div>
  );
}
