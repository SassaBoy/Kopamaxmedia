const express = require("express");
const app = express();
const mainRoutes = require("./routes/main");
const adminRoutes = require("./routes/admin");
const partnersRoutes = require("./routes/partners");
const useAuthRoutes = require("./routes/useAuthRoutes");
const useRegisterRoutes = require("./routes/useRegisterRoutes");
const useForgotRoutes = require('./routes/useForgotRoutes');
const useWorkRoutes = require('./routes/useWorkRoutes');
app.use(express.json());


app.set("view engine", "ejs");
//Static Folder
app.use(express.static('public'));

app.use("/", mainRoutes);
app.use('/partners', partnersRoutes);
app.use('/login', useAuthRoutes);
app.use('/register', useRegisterRoutes);
app.use('/work', useWorkRoutes);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/settings', (req, res) => {
  // Render the "partners.ejs" file
  res.render('settings');
});
app.use('/forgot', useForgotRoutes);
app.use('/admin', adminRoutes);
app.use('/individual', (req, res)=>{
res.render('individual');
});





//Server Running
app.listen(3000, () => {
  console.log("Server is running, you better catch it! ");

});
