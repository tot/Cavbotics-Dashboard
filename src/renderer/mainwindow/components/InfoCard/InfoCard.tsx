interface Props {
  label: string;
  info: string | number;
  color: string;
}

const InfoCard: React.FC<Props> = ({ label, info, color }: Props) => {
  return (
    <div className={`border-l-2 ${color} rounded bg-neutral-700/20 p-4`}>
      <h1 className="text-lg text-neutral-200">{info}</h1>
      <p className="text-sm text-neutral-500">{label}</p>
    </div>
  );
};

export default InfoCard;
