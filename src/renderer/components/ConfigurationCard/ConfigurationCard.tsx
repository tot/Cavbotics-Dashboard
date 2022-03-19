import { Link } from 'react-router-dom';

interface Props {
  title: string;
  description: string;
  icon: JSX.Element;
  to: string;
}

const ConfigurationCard: React.FC<Props> = ({
  title,
  description,
  icon,
  to,
}: Props) => {
  return (
    <Link
      to={to}
      className="w-full rounded-md p-4 border hover:border-neutral-700/60 border-transparent hover:bg-transparent transition-colors duration-150 bg-neutral-700/20 flex flex-col justify-between"
    >
      <div>
        <h2 className="text-white text-lg font-medium">{title}</h2>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
      <div className="m-0 p-0">{icon} </div>
    </Link>
  );
};

export default ConfigurationCard;
