import '../styles/repositories.scss';

interface RepositoryProps {
  repository: {
    name: string;
    description: string;
    link: string;
  };
}

export function RepositoryItem({ repository }: RepositoryProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.link}>Acessar Repositório</a>
    </li>
  );
}
