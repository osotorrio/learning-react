import { useEffect, useState } from 'react';
import { getRepos } from '../../Helpers/gitHubApi';
import RepositoryItem from './RepositoryItem';

function RepositoryList() {
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    const data = await getRepos('osotorrio');

    setRepos(
      data.map(repo => {
        return { id: repo.id, name: repo.name };
      })
    );
  });

  return repos.map(repo => {
    return <RepositoryItem key={repo.id} repoName={repo.name} />;
  });
}

export default RepositoryList;
