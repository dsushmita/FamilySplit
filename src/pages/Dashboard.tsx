import { Link } from "react-router-dom";
import BalanceCard from "../components/BalanceCard";
import GroupCard from "../components/GroupCard";
import ExpenseCard from "../components/ExpenseCard";

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
          <h1 className="text-2xl font-bold text-purple-600">FamilySplit</h1>

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
            <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>

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
        {/* Balance Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          <BalanceCard
            title="Net Balance"
            amount={netBalance}
            description="Your overall balance"
            color={netBalance >= 0 ? "text-green-600" : "text-red-500"}
          />

          <BalanceCard
            title="To Pay"
            amount={toPay}
            description="Money you need to pay"
            color="text-red-500"
          />

          <BalanceCard
            title="To Receive"
            amount={toReceive}
            description="Money others need to pay you"
            color="text-green-600"
          />
        </div>
        {/* Groups and Expenses */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* My Groups Section */}
          <section className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">My Groups</h3>

              <button
                type="button"
                className="text-sm font-medium text-purple-600 hover:underline"
              >
                View All
              </button>
            </div>

            <div className="space-y-4">
              {groups.map((group) => (
                <GroupCard
                  key={group.id}
                  name={group.name}
                  members={group.members}
                  balance={group.balance}
                />
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
                <ExpenseCard
                  key={expense.id}
                  title={expense.title}
                  group={expense.group}
                  paidBy={expense.paidBy}
                  amount={expense.amount}
                  date={expense.date}
                />
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
