const mongoose = require('mongoose');
const md5 = require('md5');
const connectDB = require('./config/db');
const User = require('./models/user.model');
const UserProfile = require('./models/profile.model');

const runSeeder = async () => {
  await connectDB();

  const userData = [
    {
      firstName: "Ujjwal",
      lastName: "Tiwari",
      user_id: "ujjwal25",
      email: "ujjwal@example.com",
      password: "123456",
      dob: "2000-01-01",
      mobile_no: "9876543210"
    },
    {
      firstName: "Virat",
      lastName: "Kohli",
      user_id: "kohli25",
      email: "virat@example.com",
      password: "pass123",
      dob: "1998-03-21",
      mobile_no: "7894561230"
    },
    {
      firstName: "Rohit",
      lastName: "Sharma",
      user_id: "rohit25",
      email: "rohit@example.com",
      password: "abc123",
      dob: "1999-08-10",
      mobile_no: "9999999999"
    },
    {
      firstName: "Jasprit",
      lastName: "Bumrah",
      user_id: "bumrah25",
      email: "jasprit@example.com",
      password: "boom789",
      dob: "1995-12-05",
      mobile_no: "8888888888"
    },
    {
      firstName: "MS",
      lastName: "Dhoni",
      user_id: "msd25",
      email: "msd@example.com",
      password: "msd123",
      dob: "1997-07-17",
      mobile_no: "7777777777"
    }
  ];

  for (let user of userData) {
    const newUser = await User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: md5(user.password)
    });

    await UserProfile.create({
      user_id: newUser._id,
      dob: new Date(user.dob),
      mobile_no: user.mobile_no
    });

    console.log(`Inserted: ${user.firstName} ${user.lastName} 
                           ${user.user_id}
                           ${user.email}
                           ${user.mobile_no} 
                           ${user.dob}`);
    
  }

  console.log("All users inserted!");
  mongoose.connection.close();
};

runSeeder();
