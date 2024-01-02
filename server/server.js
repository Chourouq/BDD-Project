require("dotenv").config();
const express =require("express");
const cors=require("cors")
const morgan =require("morgan");
const app= express();
const db=require('./db');

app.use(cors());
// middlewares

///retreive data from the body

app.use(express.json());






/// routes






//CREATE A USER /////////////////////
app.post("/api/v1/users", async(req, res)=>{
    // console.log(req.body);

    try{

        const results =await db.query("insert into users (username,passw, email, stat) values($1, $2,$3, $4) returning *", [req.body.username,req.body.passw,  req.body.email, req.body.stat]);

        // console.log(results.rows[0]),
        res.status(201).json({
            status :"success",
            data: {
                user:results.rows[0],
            },
        });

    }catch(err){
            console.log(err);
        }
    
   
 });






/////////seearch for users by name /////////////:
app.get('/api/v1/users/search', async (req, res) => {
    try {
      const { query } = req.query;
  
      // Perform a case-insensitive search for users by name
      const results = await db.query('SELECT * FROM users WHERE username ILIKE $1', [`%${query}%`]);
  
      res.status(200).json({
        status : 'success',
        results: results.rows.length,
        data: {
            
            user : results.rows,
        },
        
        });
    } catch (error) {
      console.error('Error searching users:', error);
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  });






 //update a user

 app.put("/api/v1/users/:id", async(req,res) =>{

    try{
        const results= await db.query("UPDATE users SET username = $1, passw = $2,  email = $3, stat = $4 where id= $5 returning *",
        [req.body.username, req.body.passw, req.body.email,req.body.stat, req.params.id] );
        // console.log(results);

        res.status(200).json({
         status:"success",
         user:results.rows[0],
        });
    }
              catch(err){
                console.log(err);
              } 
   
 })


//get one user/////////////////////////////////


app.get("/api/v1/users/:id",  async (req,res)=>{
    const userId = parseInt(req.params.id, 10); // Parse the id as an integer

    if (isNaN(userId)) {
        return res.status(400).json({
            status: "fail",
            message: "Invalid user ID",
        });
    }

    try {
        const results = await db.query('SELECT * FROM users WHERE id = $1', [userId]);

        if (results.length =1) {
            const user = results[0];
            res.status(200).json({
                status: "success",
                user: results.rows[0],
            });
            // console.log(results.rows[0]);

        } else {
            res.status(404).json({
                status: "fail",
                message: "User not found",
            });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
});




//get all users/////////////////////////////////

app.get("/api/v1/users", async (req, res) =>{
 

    
    try{
        const results = await db.query("select * from users");
    
        // console.log(results);
    res.status(200).json({
    status : 'success',
    results: results.rows.length,
    data: {
        
        user : results.rows,
    },
    
    });
    
    
    }    catch (err){
        console.log(err);
    
    }
    
    
    });
    










///////////////::get adminn 
app.get("/api/v1/admin/1", async (req, res) =>{
 

    
    try{
        const results = await db.query("select * from admin where admin_id=1");
    
        // console.log(results);
    res.status(200).json({
    status : 'success',
  
    data: {
        
        admin: results.rows[0],
    },
    
    });
    
    
    }    catch (err){
        console.log(err);
    
    }
    
    
    });


    // Update admin profile endpoint
app.put('/api/v1/admin/1', async (req, res) => {
   
    const { username, password, phoneNumber, email } = req.body;
  
    try {
      // Perform the update in your database
      const results = await db.query('UPDATE admin SET username = $1, password = $2, phoneNumber = $3, email = $4 WHERE admin_id = 1 RETURNING *', [username, password, phoneNumber, email]);
  
      if (results.rows.length === 1) {
        const updatedAdmin = results.rows[0];
        res.status(200).json({
          status: 'success',
          admin: updatedAdmin,
        });
      } else {
        res.status(404).json({
          status: 'fail',
          message: 'Admin not found',
       
        });
     
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      });
    }
  });
    
    
    
    






/////////get reservations route





// POST route for creating reservations
app.post('/api/v1/reservation', async (req, res) => {
    try {
      const { users, spots, resdate, restime, price, status } = req.body;
  
      // Validate the incoming data (you can add more validation as needed)
  
      // Insert the reservation into the database
      const result = await db.query(
        'INSERT INTO reservation (  resdate, restime, price, status ) VALUES ($1, $2, $3, $4) RETURNING *',
        [  resdate, restime, price, 'active']
      );
  
      const newReservation = result.rows[0];
  
      res.status(201).json({
        status: 'success',
        data: {
          reservation: newReservation,
        },
      });
    } catch (error) {
      console.error('Error creating reservation:', error);
      res.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    }
  });
  





app.get("/api/v1/reservation", async (req, res) =>{
 

    
    try{
        const results = await db.query("SELECT reservation_id, ResDate, Restime, price, status from reservation");
    
        // console.log(results);
    res.status(200).json({
    status : 'success',
    results: results.rows.length,
    data: {
        
        reservation : results.rows,
    },
    
    });
    
    
    }    catch (err){
        console.log(err);
    
    }
    
    
    });




    /////////seearch for reservations by date /////////////:
app.get('/api/v1/reservation/search', async (req, res) => {
    try {
        const { query } = req.query;
        console.log('Search Query:', query);

        const results = await db.query('SELECT * FROM reservation WHERE Resdate::TEXT ILIKE $1', [`%${query}%`]);

        console.log('Search Results:', results.rows);

        res.status(200).json({
            status: 'success',
            results: results.rows.length,
            data: {
                reservation: results.rows,
            },
        });
    } catch (error) {
        console.error('Error searching reservations:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});




 
// get reservation by id 



app.get("/api/v1/reservation/:id",  async (req,res)=>{
    const reservation_id = parseInt(req.params.id, 10); // Parse the id as an integer

    if (isNaN(reservation_id)) {
        return res.status(400).json({
            status: "fail",
            message: "Invalid plan ID",
        });
    }

    try {
        const results = await db.query('SELECT * FROM reservation WHERE reservation_id = $1', [reservation_id]);

        if (results.length =1) {
            const reservation = results[0];
            res.status(200).json({
                status: "success",
                reservation : results.rows[0],
            });
            // console.log(results.rows[0]);

        } else {
            res.status(404).json({
                status: "fail",
                message: "Plan not found",
            });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
});













 ////////////////update a reservation


 app.put('/api/v1/reservation/:id', async (req, res) => {
    const { id } = req.params;
   
  
    try {
      const results = await db.query("UPDATE reservation SET status = 'inactive' WHERE reservation_id = $1 RETURNING *", [id]);
  
      if (results.rows.length === 1) {
        res.json({
          status: 'success',
          data: {
            reservation: results.rows[0],
          },
        });
      } else {
        res.status(404).json({
          status: 'fail',
          message: 'Reservation not found',
        });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      });
    }
  });





///////gett plans route


app.get("/api/v1/plan", async (req, res) =>{
 

    
    try{
        const results = await db.query("SELECT  planname, planduration, price from plans");
    
        // console.log(results);
    res.status(200).json({
    status : 'success',
    results: results.rows.length,
    data: {
        
        plan : results.rows,
    },
    
    });
    
    
    }    catch (err){
        console.log(err);
    
    }
    
    
    });







///////update plan 



app.put('/api/v1/plan/1', async (req, res) => {
   
    const { planname, planduration, price } = req.body;
   
  
    try {
      // Perform the update in your database
      const results = await db.query('UPDATE plans SET planname = $1, planduration = $2, price = $3 WHERE planid = 1 RETURNING *', [planname, planduration, price]);
  
      if (results.rows.length === 1) {
        const updatedPlan = results.rows[0];
        res.status(200).json({
          status: 'success',
          data: {
        
            plan : updatedPlan,
        },
        });
      } else {
        res.status(404).json({
          status: 'fail',
          message: 'Plan not found',
       
        });
     
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      });
    }
  });







/////////get one plan 



app.get("/api/v1/plan/:id",  async (req,res)=>{
    const planid = parseInt(req.params.id, 10); // Parse the id as an integer

    if (isNaN(planid)) {
        return res.status(400).json({
            status: "fail",
            message: "Invalid plan ID",
        });
    }

    try {
        const results = await db.query('SELECT * FROM plans WHERE planid = $1', [planid]);

        if (results.length =1) {
            const plan = results[0];
            res.status(200).json({
                status: "success",
                data: {
        
                    plan : results.rows,
                },
            });
            // console.log(results.rows[0]);

        } else {
            res.status(404).json({
                status: "fail",
                message: "Plan not found",
            });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
});







///midelware when we receive the req from the frontend, the midelware receives it first,he can then perfom that req and forward it to the route handler, then send the res back

//DELETE USERS

app.delete("/api/v1/users/:id", async (req, res) =>{

    try{
        const results =await db.query("DELETE FROM users where id=$1", [req.params.id]);

// console.log(results.rows[0]),
        res.status(200).json(
            {
                status :'success',
                user: results.rows[0]
            }
        )
    }
    catch(err){
console.log(err);
    }
  
});




/////////////route to create notifications 


app.post("/api/v1/notification", async(req, res)=>{
    // console.log(req.body);

    try{

        const results =await db.query("insert into notification (message) values($1) returning *", ["New reservation created"]);

        // console.log(results.rows[0]),
        res.status(201).json({
            status :"success",
            data: {
                notification:results.rows[0],
            },
        });

    }catch(err){
            console.log(err);
        }
    
   
 });


 //////route to fetch notifications 

 
 app.get("/api/v1/notification", async (req, res) =>{
 

    
    try{
        const results = await db.query("SELECT  * from notification");
    
        // console.log(results);
    res.status(200).json({
    status : 'success',
    results: results.rows.length,
    data: {
        
        notification : results.rows,
    },
    
    });
    
    
    }    catch (err){
        console.log(err);
    
    }
    
    
    });












app.use((req, res, next)=>{
    res.status(404).json({
        status :"fail", 
    });
});

app.listen(3000, () => {
    console.log("server running on port 3000")
});

