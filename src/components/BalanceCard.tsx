type BalanceCardProps = {
  title: string;
  amount: number;
  description: string;
  color: string;
};


// function BalanceCard(props: BalanceCardProps) { }
// function BalanceCard({title, amount, description, color}: BalanceCardProps) { }, and this called object destructuring.
//  It allows you to extract properties from an object and assign them to variables with the same name. 
// In this case, the properties title, amount, description, and color are extracted from the props object 
// and assigned to variables with the same name. 
// This makes it easier to access these properties within the function without having to 
// reference props.title, props.amount, etc.

function BalanceCard({
  title,
  amount,
  description,
  color,
}: BalanceCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">
        {title}
      </h3>

      <p className={`mt-3 text-3xl font-bold ${color}`}>
        ${amount.toFixed(2)}
      </p>

      <p className="mt-2 text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default BalanceCard;