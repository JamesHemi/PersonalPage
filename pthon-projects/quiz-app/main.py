questions = [
    {"q": "Capital of France?", "a": "Paris"},
    {"q": "5 + 7 = ?", "a": "12"},
    {"q": "Python keyword to define a function?", "a": "def"}
]

def main():
    score = 0
    for q in questions:
        ans = input(q["q"] + " ")
        if ans.strip().lower() == q["a"].lower():
            score += 1
            print("Correct!")
        else:
            print(f"Wrong! Answer: {q['a']}")
    print(f"Final Score: {score}/{len(questions)}")

if __name__ == "__main__":
    main()
