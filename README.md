# Wine Manager

#### A React application for organizing wine storage areas, 18-Dec-2019

#### By **Christine Frank**

## Description

This is a React and C# solution which allows the user to better keep track of their wine and allows for faster retrieval of their stores.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Install .NET Core SDK (if not already installed)
* Install REPL *dotnet script* (if not already installed)
    * Command: 'dotnet tool install -g dotnet-script'
* Install MySql Server and WorkBench (if not already installed)
* Open a new Command Terminal and start MySql Server if not already running
    * Command: mysql -uroot -p{EnterYourPassword}
* In a new Command Terminal route to the project folder of the local repository and run the restore command and then the migration command:
```
dotnet restore
...
dotnet ef database update
```
* Confirm successful migration
* Enter the run command into the open Command Terminal
```
dotnet run
```
* Open a new browser and enter 'http://localhost:5000/'
    * To use Swagger open the browser to 'http://localhost:5000/swagger/index.html'

## Known Bugs

* UI does not reliably update with slot value changes.

## Support and contact details

Find a bug?! Add an issue to the GitHub Repo. <br>
Repo: https://github.com/christinelfrank16/winemanager.solution

Other Contact <br>
Email: christine.braun13@gmail.com <br>
LinkedIn: https://www.linkedin.com/in/christine-frank/

## Application Specifications
* See additional pdf file "Project Proposal"

## Technologies Used

* React / JS
* C# / .NETCore
* Entity Framework
* HTML
* CSS

### License

*This application is licensed under the MIT license*

Copyright (c) 2019 **Christine Frank**