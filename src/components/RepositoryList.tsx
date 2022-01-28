import React, { useEffect, useState } from 'react';
import { RepositoryItem } from './RepositoryItem';

interface RepositoriesListProps {
  name: string;
  description: string;
  link: string;
}

export function RepositoryList() {
  const [repositoriesList, setRepositoriesList] = useState<
    RepositoriesListProps[]
  >([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositoriesList(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositoriesList.map((repo: RepositoriesListProps) => (
          <RepositoryItem key={repo.name} repository={repo} />
        ))}
      </ul>
    </section>
  );
}
