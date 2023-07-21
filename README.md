# MEAN-STACK-TASK-MANAGER

## Project Description

 **Full Stack _MEAN_ Project** with All the Qualities Of a Task List 🌐.

 <hr>

### Technologies Used: 

- 🔥  **JWT** is Used For Authentication of Users And Admins
- 🍃 **MongoDB** For saving and retrieving every bits and pieces of Data
- 💙 **AngularJS** for handling the Frontend Development
- 🟩 **NodeJS/Express** for the backend Development
- ☁  **TailwindCSS / MDB** for UI Styles.
<hr>
<br>
<br>
<br>

### Steps For Hosting The Website Locally ==>
<hr>

**Step 1**: Clone The Repository in any Folder

```
$ git clone https://github.com/shivdon/MEAN-STACK-MANAGER.git
```

**step 2**: Installing dependencies in client folder:

```
npm install
```

**Step 3: start the FrontEnd Angular Server:

```
ng serve
```

<br>
## The Above Step Will start the Angular frontend Server Running on Port 4200

**Step 5**: Start a NEW TERMINAL WINDOW and follow the steps given next by changing the current directory to the directory where the repository was cloned: 

```
$ cd server && touch .env
```



**Step 6** : Environment variables setup for server-side

```
$ cat > .env

JWT_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
DATABASE_URL=mongodb+srv://gabanar427:vouoZqsbDc7jBzXF@cluster0.ecnskos.mongodb.net/?retryWrites=true&w=majority

```
**step 7.5**: Installing dependencies in server folder:
```
npm install
```

**Step 8**: Run the Server 
```
nodemon server.js
```

**FINAL STEP**: Go to Your Browser and type in the URL bar the Following:

`http://localhost:4200/`

<h1 align="center">CONGRATULATIONS!</h1>
<p align="center">You're Set to Explore</p>
