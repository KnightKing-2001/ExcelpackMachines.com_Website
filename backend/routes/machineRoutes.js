const express = require('express');
const router = express.Router();
const Machine = require('../models/Machine'); // Ensure this path matches your file structure

// -------------------------------------------------------------
// ROUTE 1: Fetch ALL machines (Used by Catalog.jsx)
// -------------------------------------------------------------
router.get('/', async (req, res) => {
  try {
    const machines = await Machine.find(); 
    res.status(200).json(machines);
  } catch (error) {
    console.error('Error fetching all machines:', error);
    res.status(500).json({ message: 'Server error while fetching machines' });
  }
});

// -------------------------------------------------------------
// ROUTE 2: Fetch ONE machine by ID (Used by MachineDetails.jsx)
// -------------------------------------------------------------
router.get('/:id', async (req, res) => {
  try {
    const machine = await Machine.findById(req.params.id);
    
    if (!machine) {
      return res.status(404).json({ message: 'Machine not found' });
    }
    
    res.status(200).json(machine);
  } catch (error) {
    console.error('Error fetching single machine:', error);
    res.status(500).json({ message: 'Server error while fetching machine details' });
  }
});

module.exports = router;