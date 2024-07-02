import { getAllUsers } from '@/utils';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import OverallPlayerBox from './OverallPlayerBox';
import Player from './Player';

interface Overall {
  profile: {
    username: string;
    region: string;
    rank: string;
    tier: string;
    reason: string;
  };
  setProfile: (a: any) => void;
  view: boolean;
  setView: (a: boolean) => void;
}

const Overall = ({ profile, setProfile, view, setView }: Overall) => {
  const allPlayers = getAllUsers();
  const [visiblePlayers, setVisiblePlayers] = useState(allPlayers.slice(0, 10));
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const loadMorePlayers = useCallback(() => {
    setVisiblePlayers(prev => {
      const newPlayers = allPlayers.slice(prev.length, prev.length + 10);
      return [...prev, ...newPlayers];
    });
  }, [allPlayers]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadMorePlayers();
        }
      },
      {
        root: null,
        rootMargin: '0px 0px 200px 0px',
        threshold: 0.9
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loadMorePlayers]);

  return (
    <main className="w-full pt-[3.6rem] max-md:!pt-[22rem]">
      <div className="w-full h-fit p-12 max-md:px-2">
        {visiblePlayers.map((player, i) => (
          <div
            onClick={() => {
              setProfile({ username: player.name, region: player.region, tier: "", rank: player.rank });
              setView(true);
            }}
            key={i}
          >
            <div>
              <OverallPlayerBox name={player.name} region={player.region} index={i + 1} rank={player.rank} />
            </div>
          </div>
        ))}

        {view && (
          <Player username={profile.username} region={profile.region} rank={profile.rank} tier={profile.tier} reason={profile.reason} setView={(e: any) => setView(e)} />
        )}

        <div ref={loadMoreRef} className="h-[100px]"></div>
      </div>
    </main>
  );
};

export default Overall;
