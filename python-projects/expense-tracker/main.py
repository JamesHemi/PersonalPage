import sys

def main():
    expenses = []
    while True:
        print("\n1. Add Expense\n2. View Expenses\n3. Exit")
        choice = input("Choose: ")
        if choice == "1":
            category = input("Category: ")
            amount = float(input("Amount: "))
            expenses.append((category, amount))
            print("Added!")
        elif choice == "2":
            total = 0
            print("\nExpenses:")
            for c, a in expenses:
                print(f"{c}: ${a}")
                total += a
            print(f"Total = ${total}")
        elif choice == "3":
            sys.exit()
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
