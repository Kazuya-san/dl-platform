'use client';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from './ui/loading-spinner';
import brackets from '@/lib/brackets.json';

const URL = '/api/brackets';

function Bracket() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function render() {
      // await fetch(URL)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setLoading(false);
      //     return data.brackets;
      //   });
      const data = brackets;
      (window as any).bracketsViewer.render({
        stages: data.stage,
        matches: data.match,
        matchGames: data.match_game,
        participants: data.participant,
      });
    }
    render();
  }, []);

  return <div className="brackets-viewer">{loading && <LoadingSpinner />}</div>;
}

export default Bracket;
