# FRIC Tool

## Instructions to Install FRIC Tool
```bash
Install XAMPP.
    Download Xampp respective to the OS of your machine (Use all default settings during installation). XAMPP provides localhost server and database functionalities. 
    https://www.apachefriends.org/download.html

Clone FRIC Repository
    Go to the directory where XAMPP folder was download (Windows by default will store it in Local Disk C:)
    Go to the 'htdocs' directory found inside the XAMPP directory. (Windows will be C:\xampp\htdocs)
    Git clone this repository. It is important that the Repository is inside htdocs because XAMPP will look for the webapp there.

Run Xampp application
    Search for the Xampp app installed in your machine and run it.
    {Insert image here}
    You should see the XAMPP Control Panel. Press the 'Apache' and 'MySQL' buttons to run the server and database functionalities.

Import Database
    Go to your broswer and type http://localhost/phpmyadmin/. You shpuld see the myphpadmin page.
    {}
    Click on "New" Icon on the left panel to create a new Database. Name it "fric"
    {}
    Click on import on the top right. Click on "Choose File" button to browse your computer for the Database template. The template can be found in the folder "Database_template" within the cloned repository (C:\xampp\htdocs\FRIC\Database_template). 
    Clicking Go should fill the data structure and will fill some default values for Analysts.
```

## Run Webapp
    ```bash
    After installing everything, the FRIC tool should be operational by going to your browser and typing http://localhost/FRIC/event.html.
    ```
