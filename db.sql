 CREATE DATABASE parking;

CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    UserName VARCHAR(100) NOT NULL,
    passw VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('subscribed', 'regular'))
);




CREATE TABLE admin(
     admin_id  BIGSERIAL NOT NULL PRIMARY KEY,
     firstName  VARCHAR(20) NOT NULL,
     LastName VARCHAR(20) NOT NULL,
     PhoneNumber VARCHAR(20) NOT NULL,
     email VARCHAR(20) NOT NULL,
     password VARCHAR(255) NOT NULL

); 



CREATE TABLE clientHistory (
    history_id BIGSERIAL NOT NULL PRIMARY KEY,
    id INT,
    action VARCHAR(20) CHECK (action IN ('subscribed', 'regular')),
    action_time TIMESTAMP,
    FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE
);




CREATE TABLE spots (
    spotID SERIAL PRIMARY KEY,
    spotName VARCHAR(100) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('reserved', 'liberated'))
);



CREATE TABLE plans (
    planID SERIAL PRIMARY KEY,
    PlanName VARCHAR(100) NOT NULL,
    PlanDuration INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);



CREATE TABLE activyLog (
    aLogID SERIAL PRIMARY KEY,
    login_time TIMESTAMP,
    users INT,
    admin INT,
    FOREIGN KEY(users) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(admin) REFERENCES admin(admin_id) ON DELETE CASCADE
);


CREATE TABLE subscription(
   subsecription_id BIGSERIAL NOT NULL PRIMARY KEY,
   plans INT,
   users INT,
   spots INT,
  startDate DATE,
  status VARCHAR(20) CHECK (status IN ('active', 'inactive')),
  FOREIGN KEY(users) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(plans) REFERENCES plans(planID) ON DELETE SET NULL,
   FOREIGN KEY(spots) REFERENCES spots(spotID) ON DELETE SET NULL
);


CREATE TABLE notification(
   notification_id BIGSERIAL NOT NULL PRIMARY KEY,
   message  VARCHAR(100)
   
);




CREATE TABLE reservation(
   reservation_id BIGSERIAL NOT NULL PRIMARY KEY,
   users INT,
   spots INT,
   ResDate DATE,
   Restime TIMESTAMP,
   price DECIMAL(10, 2) NOT NULL,
   status VARCHAR(20) CHECK (status IN ('active', 'inactive')),
  FOREIGN KEY(users) REFERENCES users(id) ON DELETE CASCADE,
   FOREIGN KEY(spots) REFERENCES spots(spotID) ON DELETE SET NULL
);


 INSERT INTO users ( UserName, passw, email) values ('selssabila kiouaz', 'selssabila','selssabila@gmail.com' )


 INSERT INTO users ( UserName, passw, email) values ('danny', 'smith','dana@gmail.com' )


 INSERT INTO reservation (ResDate, Restime, price, status) VALUES ('2023-01-06 04:00:00', '2023-01-06 04:00:00', '6', 'active');