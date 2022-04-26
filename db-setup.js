const mysql = require('mysql');
const events = require('./sample-events');
const factions = require('./sample-factions');

const rootConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'example',
});

rootConnection.connect();

rootConnection.query('CREATE DATABASE ReputationTracker', (error, results, fields) => {
    if (error) throw error;
    console.log('DB "ReputationTracker" created');
});

rootConnection.changeUser({database: 'ReputationTracker'}, (error) => {
    if (error) throw error;
})

rootConnection.query('CREATE TABLE Games (game_id int PRIMARY KEY NOT NULL AUTO_INCREMENT, title VARCHAR(255))',
 (error, results, fields) => {
    if (error) throw error;
    console.log('Table Games created');
});

rootConnection.query('CREATE TABLE Factions (faction_id int PRIMARY KEY NOT NULL AUTO_INCREMENT, assoc_game_id int, title VARCHAR(255), score int, FOREIGN KEY(assoc_game_id) REFERENCES Games(game_id) ON DELETE CASCADE)',
 (error, results, fields) => {
    if (error) throw error;
    console.log('Table Factions created');
});

rootConnection.query('CREATE TABLE Events (event_id int PRIMARY KEY NOT NULL AUTO_INCREMENT, faction int, summary VARCHAR(255), description VARCHAR(511), score int, FOREIGN KEY(faction) REFERENCES Factions(faction_id) ON DELETE CASCADE)',
    (error, results, fields) => {
        if (error) throw error;
        console.log('Table Factions created');
    });

rootConnection.query('INSERT INTO Games(title) VALUES ("The Best Ever!")', (err) => {
    if (err) throw err;
    console.log('updated users table');
});

factions.forEach((faction) => {
    console.log(faction);
    rootConnection.query('INSERT INTO Factions(assoc_game_id, title, score) VALUES (?, ?, ?)',
        faction,
        (err) => {
            if (err) throw err;
            console.log('updated factions table');
    });
})

events.forEach((event) => {
    console.log(event);
    rootConnection.query('INSERT INTO Events(faction, summary, description, score) VALUES (?, ?, ?, ?)',
    event,
    (err) => {
        if (err) throw err;
        console.log('updated stats table');
    });
});

rootConnection.end();
