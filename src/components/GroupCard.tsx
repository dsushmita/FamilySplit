type GroupCardProps = {
  name: string;
  members: number;
  balance: number;
};

function GroupCard({ name, members, balance }: GroupCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-100 p-4">
      <div>
        <h4 className="font-semibold text-gray-800">
          {name}
        </h4>

        <p className="mt-1 text-sm text-gray-500">
          {members} members
        </p>
      </div>

      <p
        className={`font-semibold ${
          balance >= 0 ? "text-green-600" : "text-red-500"
        }`}
      >
        {balance >= 0 ? "+" : "-"}$
        {Math.abs(balance).toFixed(2)}
      </p>
    </div>
  );
}

export default GroupCard;