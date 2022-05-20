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
    * ```me```: My contest ranking
    * ```total```: Estimate total number of participants

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

Unlike Projects, Activities tab in competition need to update frequently, therefore, a helper script (```helper/AddCompetition.py```) is needed to update the json file. The helper script ask each of the fields listed above with date entries splited into day, month, year to prevent misformatted date field.

