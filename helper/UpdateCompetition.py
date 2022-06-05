JSON_FILE = 'public/json/competitions.json'

def readInput(str):
    print(str, end=': ')
    return input()

import json

data = json.load(open(JSON_FILE, 'r'))

for c in data:
    if c["ranking"]["me"] == "???":
        c["ranking"]["me"] = readInput(c["name"] + ", my rank")
    if c["ranking"]["total"] == "???":
        c["ranking"]["total"] = readInput(c["name"] + ", total participants")

with open(JSON_FILE, 'w') as jsonfile:
    json.dump(data, jsonfile)