JSON_FILE = 'public/json/competitions.json'

def readInput(str):
    print(str, end=': ')
    inp = input()
    return "???" if inp == "" else inp

new_contest = {
    "tag": readInput("contest series"),
    "name": readInput("contest name"),
    "link": readInput("contest URL"),
    "date": f"{readInput('contest year')}-{readInput('contest month')}-{readInput('contest day')}",
    "ranking": {
        "me": readInput("my rank"),
        "total": readInput("total participants")
    }
}

import json

data = json.load(open(JSON_FILE))
data.append(new_contest)
with open(JSON_FILE, 'w') as jsonfile:
    json.dump(data, jsonfile)