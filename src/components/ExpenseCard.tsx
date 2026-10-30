type ExpenseCardProps = {
  title: string;
  group: string;
  paidBy: string;
  amount: number;
  date: string;
};

function ExpenseCard({
  title,
  group,
  paidBy,
  amount,
  date,
}: ExpenseCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-100 p-4">
      <div>
        <h4 className="font-semibold text-gray-800">
          {title}
        </h4>

        <p className="mt-1 text-sm text-gray-500">
          {group}
        </p>

        <p className="mt-1 text-xs text-gray-400">
          Paid by {paidBy} • {date}
        </p>
      </div>

      <p className="font-semibold text-gray-900">
        ${amount.toFixed(2)}
      </p>
    </div>
  );
}

export default ExpenseCard;