## Pawtastic 

This is a Web App which provides Services for your pets created with **MERN** Stack

## Description

This web app lets you book services for your Pets . You can book Services like dog walk , Drop-in visit
(We’ll stop by to snuggle, feed, and play with your pets in the comfort of their own home.) House sitting
(We’ll stay overnight with your pets to make sure they have round-the-clock love.)


**Features** <br>
 [✔] User authentication.
 [✔] Book Services.
 [✔] Pay for the servce integrated with razorpay
 [✔] View Profile details <br><br>

Prerequisite:

You should have following things : <br>

**Node Js** installed <br>

**Code Editior** ( for eg- Vs code )

### Installation :
 
```
git clone https://github.com/AagmanSuri/Pawtastic.git
```

```
npm install 
```

```
npm start
```

## Api's used : 

For accessing all users (Get Request):  https://mernpawtastic.herokuapp.com/

For Authentication (Post )https://mernpawtastic.herokuapp.com/signin<br>

Request to be sent 
```
{
"email":"aagman@gmail.com",
"password":"aagman"
}
```
For registering a User (Post) https://mernpawtastic.herokuapp.com/register
```
{

"email":"",
"password":"",
"FirstName":"",
"LastName":"",
"Phone":"",
"City":"",
"ZipCode":"",
"pet":"",
"name":"",
"breed":"",
"birthDay":"",
"Gender":"",
"neutered":"",
"weight":,
"vetname":"",
"vetsPhoneNo":,
"vetsAddress":""
}
```

For Storing Service Request (Post) https://mernpawtastic.herokuapp.com/service <br>
Request to be sent 
```
{
"message":"",
"razorPayLink":"",
"frequency":"",
"start_Date":"",
"days":[
"Tuesday","Wednesday","Thursday"],
"Times":["Evening","Afternoon"],
"note_for_sitter":""
}<br>
```
For getting service of particular user (Post) : https://mernpawtastic.herokuapp.com/getService
Request to be sent 
```
{
"email":"aagman@gmail.com"
}
```

## Screenshots

##### Some Screen Shots 

![Screenshot 2021-12-29 at 10 37 01 PM](https://user-images.githubusercontent.com/63902687/147686588-0805a1d7-58a8-4eb2-943c-ecd4275dbb9a.png)
![Screenshot 2021-12-29 at 10 37 18 PM](https://user-images.githubusercontent.com/63902687/147686613-93049313-c027-4955-94c2-67def98c6d2c.png)
![Screenshot 2021-12-29 at 10 37 38 PM](https://user-images.githubusercontent.com/63902687/147686636-dcfe2673-f59c-4539-a499-5290dde8b74f.png)
![Screenshot 2021-12-29 at 10 38 15 PM](https://user-images.githubusercontent.com/63902687/147686674-97b572ac-3b1e-4523-82eb-817d8e63a8aa.png)
![Screenshot 2021-12-29 at 10 38 37 PM](https://user-images.githubusercontent.com/63902687/147686701-db81c344-59c9-4e1e-b7dc-9308c49017e3.png)
![Screenshot 2021-12-29 at 10 40 30 PM](https://user-images.githubusercontent.com/63902687/147686836-7a4e7270-4618-4b7e-a643-183c77a6fe8f.png)
![Screenshot 2021-12-29 at 10 41 43 PM](https://user-images.githubusercontent.com/63902687/147686921-bd241838-5855-4c8b-89c9-ce1c39f53038.png)



## Contributors
1. Aagman Suri - 1911066
2. Aditya Bhaleghare - 1911068
3. Swastik Kar - 1911086
4. Mitali Sharma - 1911094
