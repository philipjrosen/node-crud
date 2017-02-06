module.exports = {
  // show all events
  showEvents: (req, res) => {

    // create dummy data
   const events = [
    { name: 'Basketball', description: 'Throwing into a basket.' },
    { name: 'Swimming', description: 'Michael Phelps is the fast fish.' },
    { name: 'Weightlifting', description: 'Lifting heavy things up' }
  ];

    // return a view with data
    res.render('pages/events', { events: events });
  }
};
