import React, { useState, useEffect } from 'react';
import styles from './PlayerStats.module.css';

const PlayerStats = ({ username }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      setError(null);

      const apiKey = process.env.REACT_APP_FORTNITE_API_KEY;
      if (!apiKey) {
        setError('API Key not found.');
        setLoading(false);
        return;
      }

      try {
        // Step 1: Look up account ID
        const lookupResponse = await fetch(`https://fortniteapi.io/v1/lookup?username=${encodeURIComponent(username)}&strict=false`, {
          headers: { Authorization: apiKey },
        });

        const lookupJson = await lookupResponse.json();

        if (!lookupResponse.ok || lookupJson.result === false) {
          throw new Error('Player stats are currently unavailable');
        }

        const accountId = lookupJson.account_id;

        if (!accountId) {
          throw new Error('Account ID not found in lookup response.');
        }

        // Step 2: Fetch player stats
        const statsResponse = await fetch(`https://fortniteapi.io/v1/stats?account=${accountId}`, {
          headers: { Authorization: apiKey },
        });

        if (!statsResponse.ok) {
          throw new Error('Failed to fetch player stats.');
        }

        const statsData = await statsResponse.json();
        if (statsData.global_stats && statsData.global_stats.overall) {
            setStats(statsData.global_stats.overall);
        } else {
            throw new Error('Stats data is not in the expected format.');
        }

      } catch (err) {
        setError(err.message || 'An error occurred while fetching stats.');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  if (loading) return <p className={styles.loading}>Loading Stats...</p>;
  
  if (error) {
    const trackerUrl = `https://fortnitetracker.com/profile/all/${encodeURIComponent(username)}`;
    return (
      <p className={styles.error}>
        Player not found. <a href={trackerUrl} target="_blank" rel="noopener noreferrer">Verify username?</a>
      </p>
    );
  }

  if (!stats) return null;

  return (
    <div className={styles.statsContainer}>
      <div className={styles.stat}>
        <span className={styles.statValue}>{stats.wins}</span>
        <span className={styles.statLabel}>Wins</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.statValue}>{stats.kills}</span>
        <span className={styles.statLabel}>Kills</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.statValue}>{stats.kd.toFixed(2)}</span>
        <span className={styles.statLabel}>K/D</span>
      </div>
    </div>
  );
};

export default PlayerStats; 