import os, json, base64
from cryptography.fernet import Fernet

KEY_FILE = "key.key"
DATA_FILE = "vault.json"

def load_key():
    if not os.path.exists(KEY_FILE):
        key = Fernet.generate_key()
        with open(KEY_FILE, "wb") as f:
            f.write(key)
    else:
        with open(KEY_FILE, "rb") as f:
            key = f.read()
    return Fernet(key)

def load_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r") as f:
            return json.load(f)
    return {}

def save_data(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f)

def main():
    fernet = load_key()
    data = load_data()

    while True:
        print("\n1. Add Password\n2. Get Password\n3. Exit")
        choice = input("Choose: ")
        if choice == "1":
            site = input("Site: ")
            pwd = input("Password: ")
            data[site] = fernet.encrypt(pwd.encode()).decode()
            save_data(data)
            print("Saved!")
        elif choice == "2":
            site = input("Site: ")
            if site in data:
                print("Password:", fernet.decrypt(data[site].encode()).decode())
            else:
                print("Not found.")
        elif choice == "3":
            break

if __name__ == "__main__":
    main()
