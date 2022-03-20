interface Props {
  label: string;
  status: boolean;
}

const StatusCard: React.FC<Props> = ({ label, status }: Props) => {
  return (
    <div className="w-full rounded-md bg-neutral-700/20 p-4 flex justify-between">
      <p className="text-white text-base ">{label}</p>
      <p className={status ? 'text-emerald-500' : 'text-amber-500'}>
        {status.toString()}
      </p>
    </div>
  );
};

export default StatusCard;
