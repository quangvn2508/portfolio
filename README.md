# My personal [website](https://quangvn2508.github.io/Portfolio/)

## Projects

**Projects** section is the set of personal project. ```public/json/projects.json``` contains information about the projects including fields:

* ```name```: project title
* ```background```: cover image file located in ```public/image/```
* ```links```: list of links referencing the project.
    * ```github``` (optional)
    * ```link``` (optional)
    * ```youtube``` (optional)
* ```description```: short description

For example,

```
{
    "name": "title",
    "background": "cover.png",
    "links": {
        "github": "#",
        "link": "#",
    },
    "description": "..."
}
```

## Competitions

1. **Profiles:** list of competitive programming account and profiles.

2. **Activities:** list of contests participated with competitions are grouped in corresponding tag (e.g. CJ2020: CodeJam 2020, CF: Codeforces series, etc.). ```public/json/competitions.json``` contains list of contests including fields:

* ```tag```: Contest series
* ```name```: Contest name
* ```date```: Contest date in any valid format
* ```ranking```
    * ```me```: My contest final ranking (leave empty if unknown)
    * ```total```: Estimate total number of participants (leave empty if unknown)

For example,

```
{
    "tag": "CJ2020",
    "name": "Codejam Qualification Round",
    "date": "2020-01-01",
    "ranking": {
        "me": "2000",
        "total": 2000
    }
}
```

Unlike Projects, Activities tab in competition need to update frequently, therefore, a helper script (```helper/AddCompetition.py```) is needed to update the json file. The helper script ask each of the fields listed above with date entries splited into day, month, year to prevent misformatted date field. Often, when final ranking and number of participants unknown, blank input result in "???" which can later be modified with helper script (```helper/UpdateCompetition.py```).

## Profile

Profile page contains list of personal details clasified as Groups. Each group will consists of multiple entries. All these information will be fetched from ```public/json/profile.json``` with the following fields:

* ```groupName``` followed by a list of entry object.
    * ```name```: Title of a group entry.
    * ```overview```: Contains a list of strings for describing the group entry.
    * ```other```: Contains a list of objects with the following fields:
        * ```name```: Name of additional section
        * ```type```: Either 0 for tag or 1 for button.
        * ```list```:
            1. If ```type = 0```, ```list``` is a list of strings.
            2. If ```type = 1```, ```list``` is a list of objects with two fields ```name``` and ```URL```.

For example,
```
{
    "Education": [
        {
            "name": "Institution name",
            "overview": [
                "Some text",
                "Some text"
            ],
            "other": [
                {
                    "name": "Modules",
                    "type": "0",
                    "list": ["Module 1", "Module 2"]
                },
                {
                    "name": "Links",
                    "type": "1",
                    "list": [
                        {"name": "Uni. Website","URL": "#"}
                    ]
                }
            ]
        }
    ]
}
```
