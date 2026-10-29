import { Link } from "react-router-dom";

function Dashboard() {
  // Sample balance data
  const toPay = 100;
  const toReceive = 350;
  const netBalance = toReceive - toPay;

  // Sample groups
  const groups = [
    {
      id: 1,
      name: "Family Expenses",
      members: 4,
      balance: 150,
    },
    {
      id: 2,
      name: "Sydney Housemates",
      members: 3,
      balance: -50,
    },
    {
      id: 3,
      name: "Gold Coast Trip",
      members: 5,
      balance: 150,
    },
  ];

  // Sample expenses
  const expenses = [
    {
      id: 1,
      title: "Groceries",
      group: "Family Expenses",
      paidBy: "You",
      amount: 120,
      date: "28 Oct 2026",
    },
    {
      id: 2,
      title: "Electricity Bill",
      group: "Sydney Housemates",
      paidBy: "Bharat",
      amount: 180,
      date: "26 Oct 2026",
    },
    {
      id: 3,
      title: "Restaurant",
      group: "Gold Coast Trip",
      paidBy: "You",
      amount: 95,
      date: "24 Oct 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-purple-600">
            FamilySplit
          </h1>

          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="font-medium text-gray-700 hover:text-purple-600"
            >
              Dashboard
            </Link>

            <Link
              to="/login"
              className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-8">

        {/* Dashboard Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Dashboard
            </h2>

            <p className="mt-2 text-gray-600">
              Manage your family expenses in one place.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="rounded-lg border border-purple-600 bg-white px-4 py-2 font-medium text-purple-600 hover:bg-purple-50"
            >
              + Create Group
            </button>

            <button
              type="button"
              className="rounded-lg bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700"
            >
              + Add Expense
            </button>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">

          {/* Net Balance */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">
              Net Balance
            </h3>

            <p
              className={`mt-3 text-3xl font-bold ${
                netBalance >= 0
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              ${netBalance.toFixed(2)}
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Your overall balance
            </p>
          </div>

          {/* To Pay */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">
              To Pay
            </h3>

            <p className="mt-3 text-3xl font-bold text-red-500">
              ${toPay.toFixed(2)}
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Money you need to pay
            </p>
          </div>

          {/* To Receive */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">
              To Receive
            </h3>

            <p className="mt-3 text-3xl font-bold text-green-600">
              ${toReceive.toFixed(2)}
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Money others need to pay you
            </p>
          </div>
        </div>

        {/* Groups and Expenses */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* My Groups Section */}
          <section className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                My Groups
              </h3>

              <button
                type="button"
                className="text-sm font-medium text-purple-600 hover:underline"
              >
                View All
              </button>
            </div>

            <div className="space-y-4">
              {groups.map((group) => (
                <div
                  key={group.id}
                  className="flex items-center justify-between rounded-lg border border-gray-100 p-4"
                >
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {group.name}
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">
                      {group.members} members
                    </p>
                  </div>

                  <p
                    className={`font-semibold ${
                      group.balance >= 0
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {group.balance >= 0 ? "+" : "-"}$
                    {Math.abs(group.balance).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Expenses Section */}
          <section className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                Recent Expenses
              </h3>

              <button
                type="button"
                className="text-sm font-medium text-purple-600 hover:underline"
              >
                View All
              </button>
            </div>

            <div className="space-y-4">
              {expenses.map((expense) => (
                <div
                  key={expense.id}
                  className="flex items-center justify-between rounded-lg border border-gray-100 p-4"
                >
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {expense.title}
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">
                      {expense.group}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Paid by {expense.paidBy} • {expense.date}
                    </p>
                  </div>

                  <p className="font-semibold text-gray-900">
                    ${expense.amount.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-gray-400">
          FamilySplit — Split expenses, stay connected.
        </footer>

      </main>
    </div>
  );
}

export default Dashboard;