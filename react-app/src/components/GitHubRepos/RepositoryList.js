import { useEffect, useState } from 'react';
import { getRepos } from '../../Helpers/gitHubApi';
import RepositoryItem from './RepositoryItem';

function RepositoryList() {
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    const result = await getRepos('mgarcia');
    setRepos(result);
  }, []);

  return repos.map(repo => {
    return <RepositoryItem key={repo.id} repoName={repo.name} />;
  });
}

export default RepositoryList;
