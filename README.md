# FRIC Tool

## Instructions to Install FRIC Tool
#### 1. Install XAMPP.
Download XAMPP respective to the OS of your machine (Use all default settings during installation). XAMPP provides localhost server and database functionalities. 
[XAMPP link](https://www.apachefriends.org/download.html)

### 2. Clone FRIC Repository
Go to the directory where XAMPP folder was download (Windows by default will store it in Local Disk C:)
Go to the **htdocs** directory found inside the XAMPP directory. (Windows will be **C:\xampp\htdocs**)
Git clone this repository. It is important that the Repository is inside htdocs because XAMPP will look for the webapp there.

### 3. Run XAMP application
Search for the XAMPP app installed in your machine and run it.
![XAMPP Control Panel](https://github.com/RicardoTorresMendez/FRIC/blob/Doc/xampp_control_panel.JPG)
You should see the XAMPP Control Panel. Press the **Apache** and **MySQL** buttons to run the server and database functionalities.

### 4. Import Database
Go to your broswer and type [phpmyadmin link](http://localhost/phpmyadmin/). You should see the myphpadmin page.
![phpmyadmin](https://github.com/RicardoTorresMendez/FRIC/blob/Doc/phpmyadmin.JPG)
Click on **New** Icon on the left panel to create a new Database. Name it "fric"
![New Database](https://github.com/RicardoTorresMendez/FRIC/blob/Doc/new_database.JPG)
Click on import on the top right. Click on **Choose File** button to browse your computer for the Database template. The template can be found in the folder **Database_template** within the cloned repository (**C:\xampp\htdocs\FRIC\Database_template**).
![Import](C:/xampp/htdocs/FRIC/https://github.com/RicardoTorresMendez/FRIC/blob/Doc/browse_computer.JPG)
Clicking Go should fill the data structure and will fill some default values for Analysts.

## Run Webapp
After installing everything, the FRIC tool should be operational by going to your browser and typing [FRIC link (localhost)](http://localhost/FRIC/event.html).